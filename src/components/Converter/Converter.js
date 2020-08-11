import React from 'react'
import styled from '@emotion/styled'

const ConverterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  p {
    margin-right: 10px;
  }
  select {
    border-radius: 5px;
    border: 1px solid #ffffff;
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    background-color: rgba(255,105,15,0.5)
  }
`

const Converter = (props) => {
  const { handleCurrencyChange, currency } = props
  return (
    <ConverterContainer>
      <p>Currency</p>
      <select name="currency" id="currency" form="currencyForm" onChange={handleCurrencyChange} value={currency}>
        <option value="USD">USD</option>
        <option value="SGD">SGD</option>
        <option value="CNY">CNY</option>
        <option value="KRW">KRW</option>
      </select>
    </ConverterContainer>
  )
}

export default Converter