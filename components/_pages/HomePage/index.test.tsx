import HomePage from './index'
import { render, screen } from '@testing-library/react'

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
