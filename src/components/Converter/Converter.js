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
    border: 1px solid ${props => props.theme.colors.white};
    padding: 0.25rem 0.5rem;
    color: ${props => props.theme.colors.white};
    background-color: rgba(255,105,15,0.5)
  }
`

const Converter = (props) => {
  const { handleCurrencyChange, currency } = props
  return (
    <ConverterContainer>
      <p>Currency</p>
      <select name="currency" id="currency" form="currencyForm" onChange={handleCurrencyChange} value={currency} data-testid="currency">
        <option value="USD" data-testid="usd">USD</option>
        <option value="SGD" data-testid="sgd">SGD</option>
        <option value="CNY" data-testid="cny">CNY</option>
        <option value="KRW" data-testid="krw">KRW</option>
      </select>
    </ConverterContainer>
  )
}

export default Converter