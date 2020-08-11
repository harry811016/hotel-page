import React from 'react'
import styled from '@emotion/styled'
import Converter from './../Converter/Converter'

const NavbarContainer = styled.div`
  height: 62px;
  color: #ffffff;
  background-color: #ff690f;
  display: flex;
  font-size: 1rem;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = (props) => {
  const { handleCurrencyChange } = props
  return (
    <NavbarContainer>
      <h1>Your Hotel.com</h1>
      <Converter handleCurrencyChange={handleCurrencyChange} currency={props.currency} />
    </NavbarContainer>
  )
}

export default Navbar