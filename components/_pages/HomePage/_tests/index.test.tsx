import mock, { mockMatrix5 } from '../Grid/generateStore/index.mock'
jest.mock('../Grid/generateStore', () => jest.fn(mock))

import { GITHUB_REPO } from '../_constants'
import { GridEvent, gridEvents5 } from './gridEvents'
import { axe } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import HomePage from '../index'
import matchMatrixElement from './matchMatrixElement'
import userEvent from '@testing-library/user-event'

test('render the page', () => {
  render(<HomePage />)
  const h1Anchor = screen.getByText(/github repo/i).closest('a')
  expect(h1Anchor).toHaveAttribute('href', GITHUB_REPO)

  const gridHeader = screen.getByText(/grid:/i)
  expect(gridHeader).toBeVisible()

  const grid = screen.getByRole('grid')
  expect(grid).toBeVisible()

  const gridControlsHeader = screen.getByText(/grid controls:/i)
  expect(gridControlsHeader).toBeVisible()

  const introHeader = screen.getByText(/intro:/i)
  expect(introHeader).toBeVisible()
})

test('operate the grid', async () => {
  const { container } = render(<HomePage />)
  // screen.debug()
  // const results = await axe(container)
  // expect(results).toHaveNoViolations()

  const squares = screen.getAllByLabelText(/square/i)
  squares.forEach(matchMatrixElement(mockMatrix5))

  gridEvents5.forEach(({ index, newMatrix, type }: GridEvent) => {
    const arrayIndex = index.x * 5 + index.y
    userEvent[type](squares[arrayIndex])
    squares.forEach(matchMatrixElement(newMatrix))
  })
})

// TODO: complete the following test
test('operate the size picker', () => {})
