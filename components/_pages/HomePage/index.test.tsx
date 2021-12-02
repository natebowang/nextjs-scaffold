import mock from './Grid/generateStore/mock'
jest.mock('./Grid/generateStore', () => jest.fn(mock))

import { render, screen } from '@testing-library/react'
import HomePage from './index'

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
