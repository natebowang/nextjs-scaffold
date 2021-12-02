import { render, screen } from '@testing-library/react'
import HomePage from './index'
import mockGenerateStore from './Grid/generateStore/mock'

jest.mock('./Grid/generateStore', () => mockGenerateStore)

// TODO: complete the integration test
test('render heading and table', () => {
  render(<HomePage />)
  expect(screen.getByRole('table')).toBeVisible()
})
