import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import useHotelAPI from './hooks/useHotelAPI'

const App = () => {
  const [currency, setCurrency] = useState('SGD')
  const [hoteldata, fetchHoteldata] = useHotelAPI(currency)

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
    window.localStorage.setItem('hotelPageCurrency', e.target.value)
  }

  useEffect(() => {
    setCurrency(window.localStorage.getItem('hotelPageCurrency') ? window.localStorage.getItem('hotelPageCurrency') : 'SGD')
    fetchHoteldata(currency)
  }, [currency])

  return (
    <Fragment>
      <Navbar handleCurrencyChange={handleCurrencyChange} currency={currency} />
      <Card currency={currency} hoteldata={hoteldata} />
    </Fragment>
  )
}

export default App
