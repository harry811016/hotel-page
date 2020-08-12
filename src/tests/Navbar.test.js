import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import Navbar from '../components/Navbar/Navbar'

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
  const { asFragment } = render(<ThemeProvider theme={theme}><Navbar /></ThemeProvider>)
  expect(asFragment(<ThemeProvider theme={theme}><Navbar /></ThemeProvider>)).toMatchSnapshot()
})

// title
it('should have title', () => {
  const { getByTestId } = render(<ThemeProvider theme={theme}><Navbar /></ThemeProvider>)
  expect(getByTestId('title')).toHaveTextContent('Your Hotel.com')
})