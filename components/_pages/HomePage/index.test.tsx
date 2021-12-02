import { mockGenerateStore } from './Grid/generateStore/mock'
import { render, screen } from '@testing-library/react'
import HomePage from './index'

jest.mock('./Grid/generateStore', () => mockGenerateStore)

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
