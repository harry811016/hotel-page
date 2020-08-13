import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import hotelApis from './hooks/useHotelAPI'

const useHotelAPI = hotelApis.useHotelAPI

const App = () => {
  const [currency, setCurrency] = useState('USD')
  const [hoteldata, fetchHoteldata] = useHotelAPI(currency)

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
    window.localStorage.setItem('hotelPageCurrency', e.target.value)
  }

  useEffect(() => {
    setCurrency(window.localStorage.getItem('hotelPageCurrency') ? window.localStorage.getItem('hotelPageCurrency') : 'USD')
    fetchHoteldata(currency)
  }, [currency, fetchHoteldata])

  return (
    <Fragment>
      <Navbar handleCurrencyChange={handleCurrencyChange} currency={currency} />
      <Card currency={currency} hoteldata={hoteldata} />
    </Fragment>
  )
}

export default App
