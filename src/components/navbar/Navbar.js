import React from 'react'
import styled from '@emotion/styled'
import Converter from './../Converter/Converter'

const NavbarContainer = styled.div`
  height: 62px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.main_color};
  display: flex;
  font-size: 1rem;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 50px;
  display: flex;
  align-items: center;
  .img {
    display: flex;
    align-items: center;
    img{
      height: 40px;
      width: 40px;
      margin-right: 10px;
    }
  }
`

const Navbar = (props) => {
  const { handleCurrencyChange, currency } = props
  return (
    <NavbarContainer>
      <Title>
        <div className="img" data-testid="logo">
          <img src="https://tsungtingdu.github.io/hotel-page/assets/hotel.png" alt="" />
        </div>
        <div data-testid="title">Your Hotel.com</div>

      </Title>
      <Converter handleCurrencyChange={handleCurrencyChange} currency={currency} />
    </NavbarContainer>
  )
}

export default Navbar