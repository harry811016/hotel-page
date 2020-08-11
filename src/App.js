import React, { Fragment, useState } from 'react'
import Navbar from './components/navbar/Navbar'

const App = () => {
  const [currency, setCurrency] = useState('SGD')

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value)
  }

  return (
    <Fragment>
      <Navbar handleCurrencyChange={handleCurrencyChange} />
      <div className="App">
      </div>
    </Fragment>
  )
}

export default App
