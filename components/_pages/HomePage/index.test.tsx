import HomePage from './index'
import mockGenerateStore from './Grid/generateStore/mock'
import { render, screen } from '@testing-library/react'

jest.mock('./Grid/generateStore', () => mockGenerateStore)

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
