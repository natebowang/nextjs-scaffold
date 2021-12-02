import mocked from './Grid/generateStore/mocked'
jest.mock('./Grid/generateStore', () => jest.fn(mocked))

import { render, screen } from '@testing-library/react'
import HomePage from './index'

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
