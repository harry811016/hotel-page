import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { ThemeProvider } from 'emotion-theming'
import App from '../App'

afterEach(cleanup)

it('should take a snapshot', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />)
  const result = renderer.getRenderOutput()
  expect(result).toMatchSnapshot()
})