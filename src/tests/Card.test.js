import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import Card from '../components/Card/Card'
import mockDataSet from '../tests/mockDataSet'

const theme = {
  colors: {
    main_color: "#ff690f",
    black: "#000000",
    white: "#ffffff",
    dark_blue: "#003580",
    dark_yellow: "#feba02",
    dark_green: "#008009",
    dark_grey: "#333333",
    dark_red: "#bf323b",
    bg_green: "rgba(0,128,9,0.05)",
    bg_grey: "rgba(200, 200, 200, 0.5)"
  }
}

afterEach(cleanup)

// snapshot
it('should take a snapshot', () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <Card
        hoteldata={mockDataSet.set1}
      />
    </ThemeProvider>)
  expect(asFragment(<ThemeProvider theme={theme}><Card /></ThemeProvider>)).toMatchSnapshot()
})

// [Mock data set 1] show basic info with SGD
it('select currency as SGD', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Card
        hoteldata={mockDataSet.set1}
      />
    </ThemeProvider>)

  expect(getByTestId('name')).toHaveTextContent('hotel name')
  expect(getByTestId('address')).toHaveTextContent('hotel address')
  expect(getByTestId('stars')).toHaveTextContent('★★★★')
  expect(getByTestId('rating')).toHaveTextContent('7.7')

  // no description before clicking "see more" btn
  expect(getByTestId('description')).toHaveTextContent('')

  expect(getByTestId('price')).toHaveTextContent('SGD 100')
  expect(getByTestId('expensive-price')).toHaveTextContent('$105')
  expect(getByTestId('saved-percentage')).toHaveTextContent('Save 5.0% !')
  expect(getByTestId('deal')).toHaveTextContent('Book now!')

  // tax and hotel fee exist if there are data
  expect(getByTestId('tax-included-msg')).toHaveTextContent('*tax-inclusive')
  expect(getByTestId('tax')).toHaveTextContent('tax: $13.12')
  expect(getByTestId('hotel-fee')).toHaveTextContent('hotel fees: $16.4')
})

// show description after clicked see more button
it('show description after clicked "see more" button', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Card
        hoteldata={mockDataSet.set1}
      />
    </ThemeProvider>)
  fireEvent.click(getByTestId('more'))
  expect(getByTestId('description')).toHaveTextContent('hotel description')
  fireEvent.click(getByTestId('description-btn'))
  expect(getByTestId('description')).not.toHaveTextContent('hotel description')
})

// [Mock data set 2] show basic info with KRW
it('change currency to KRW', () => {
  const { getByTestId, queryByText } = render(
    <ThemeProvider theme={theme}>
      <Card
        hoteldata={mockDataSet.set2}
      />
    </ThemeProvider>)

  expect(getByTestId('name')).toHaveTextContent('KRW hotel name')
  expect(getByTestId('address')).toHaveTextContent('KRW hotel address')
  expect(getByTestId('stars')).toHaveTextContent('★')
  expect(getByTestId('rating')).toHaveTextContent('1.7')
  expect(getByTestId('saved-percentage')).toHaveTextContent('Save 11.0% !')
  expect(getByTestId('deal')).toHaveTextContent('Book now!')

  // no description before clicking "see more" btn
  expect(getByTestId('description')).toHaveTextContent('')

  // round up price
  expect(getByTestId('price')).toHaveTextContent('KRW 134,435')
  expect(getByTestId('expensive-price')).toHaveTextContent('$149,251')

  // things should not exist
  const taxMsgElement = queryByText('*tax-inclusive')
  expect(taxMsgElement).toBeNull()
  const taxElement = queryByText('tax:')
  expect(taxElement).toBeNull()
  const hotelFeeElement = queryByText('hotel fees:')
  expect(hotelFeeElement).toBeNull()
})

// [Mock data set 3] no price data
it('price data unavailable', () => {
  const { getByTestId, queryByText } = render(
    <ThemeProvider theme={theme}>
      <Card
        hoteldata={mockDataSet.set3}
      />
    </ThemeProvider>)
  expect(getByTestId('deal')).toHaveTextContent('Unavailable')
})

// [Mock data set 4] star and rating are zero
it('price data unavailable', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Card
        hoteldata={mockDataSet.set4}
      />
    </ThemeProvider>)
  expect(getByTestId('stars')).toHaveTextContent('')
  expect(getByTestId('rating')).toHaveTextContent('0')
})