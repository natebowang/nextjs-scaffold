import mock, { mockMatrix5 } from '../Grid/generateStore/index.mock'
jest.mock('../Grid/generateStore', () => jest.fn(mock))

import { ElementState, Matrix, MatrixElement } from '../Grid/_types'
import { EventDetails, gridEvents5 } from './gridEvents'
import { GITHUB_REPO } from '../_constants'
import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from '../index'

test('render the headers', () => {
  render(<HomePage />)
  const h1Anchor = screen.getByText(/github repo/i).closest('a')
  expect(h1Anchor).toHaveAttribute('href', GITHUB_REPO)

  const gridHeader = screen.getByText(/grid:/i)
  expect(gridHeader).toBeVisible()

  const gridControlsHeader = screen.getByText(/grid controls:/i)
  expect(gridControlsHeader).toBeVisible()

  const introHeader = screen.getByText(/intro:/i)
  expect(introHeader).toBeVisible()
})

const accessibleNameMap: Record<MatrixElement, RegExp> = {
  [ElementState.EMPTY]: /empty square/i,
  [ElementState.FILLED]: /filled square$/i,
  [ElementState.FILLED_WITH_COUNT]: /filled square with count/i,
  [ElementState.CONNECTED]: /connected square$/i,
  [ElementState.CONNECTED_WITH_COUNT]: /connected square with count/i,
}

const matchMatrixElement = (matrix: Matrix) => {
  const flattenedMatrix = matrix.flat()
  return (square: HTMLElement, i: number) => {
    expect(square).toHaveAccessibleName(accessibleNameMap[flattenedMatrix[i]])
  }
}

test('render the table', () => {
  render(<HomePage />)
  const grid = screen.getByRole('table')
  expect(grid).toBeVisible()

  const squares = screen.getAllByLabelText(/square/i)
  squares.forEach(matchMatrixElement(mockMatrix5))

  gridEvents5.eventsDetails.forEach(({ index, newMatrix, type }: EventDetails) => {
    const arrayIndex = gridEvents5.n * index.x + index.y
    fireEvent[type](squares[arrayIndex])
    squares.forEach(matchMatrixElement(newMatrix))
  })
})
