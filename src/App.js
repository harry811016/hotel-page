import React, { Fragment, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

const App = () => {
  const [currency, setCurrency] = useState('SGD')

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
  }

  return (
    <Fragment>
      <Navbar handleCurrencyChange={handleCurrencyChange} />
      <Card currency={currency} />
    </Fragment>
  )
}

export default App
