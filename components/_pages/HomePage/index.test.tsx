import HomePage from './index'
import React from 'react'
import { render, screen } from '@testing-library/react'

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
