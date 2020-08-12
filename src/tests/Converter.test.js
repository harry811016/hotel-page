import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import Converter from '../components/Converter/Converter'

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

it('should take a snapshot', () => {
  const { asFragment } = render(<ThemeProvider theme={theme}><Converter /></ThemeProvider>)
  expect(asFragment(<ThemeProvider theme={theme}><Converter /></ThemeProvider>)).toMatchSnapshot()
})

it('default currency is USD', () => {
  const { getByTestId } = render(<ThemeProvider theme={theme}><Converter /></ThemeProvider>)
  expect(getByTestId('currency')).toHaveTextContent('USD')
})

it('change currency to SGD', () => {
  const { getByTestId } = render(<ThemeProvider theme={theme}><Converter /></ThemeProvider>)
  fireEvent.click(getByTestId('sgd'))
  expect(getByTestId('currency')).toHaveTextContent('SGD')
})

it('fire handleCurrencyChange function when there is a changes of converter', () => {
  const handleCurrencyChange = jest.fn()
  const { getByTestId } = render(<ThemeProvider theme={theme}><Converter handleCurrencyChange={handleCurrencyChange} /></ThemeProvider>)
  fireEvent.change(getByTestId('currency'), { target: { value: 'CNY' } })
  expect(handleCurrencyChange).toHaveBeenCalled()
})