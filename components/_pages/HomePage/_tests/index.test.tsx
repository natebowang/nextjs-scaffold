import mock, { mockMatrix5 } from '../Grid/generateStore/index.mock'
jest.mock('./Grid/generateStore', () => jest.fn(mock))

import { ElementState, FlattenedMatrix, Matrix, MatrixElement } from '../Grid/_types'
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

const { CONNECTED, CONNECTED_WITH_COUNT, EMPTY, FILLED, FILLED_WITH_COUNT } = ElementState
const flattenedMatrix5 = mockMatrix5.flat()
const accessibleNameMap: Record<MatrixElement, RegExp> = {
  [EMPTY]: /empty square/i,
  [FILLED]: /filled square$/i,
  [FILLED_WITH_COUNT]: /filled square with count/i,
  [CONNECTED]: /connected square$/i,
  [CONNECTED_WITH_COUNT]: /connected square with count/i,
}
const matchMatrixElement =
  (flattenedMatrix: MatrixElement[]) => (square: HTMLElement, i: number) => {
    expect(square).toHaveAccessibleName(accessibleNameMap[flattenedMatrix[i]])
  }

export function* generator(): Generator<Record<string, FlattenedMatrix>> {
  const mouseEnter04Matrix: Matrix = [
    [0, 0, 0, 0, 3],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
  ]

  yield {
    mouseEnter4: mouseEnter04Matrix.flat(),
  }

  const click04Matrix: Matrix = [
    [0, 0, 0, 0, 4],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
  ]

  yield {
    click4: click04Matrix.flat(),
  }
}

// clickAndLeave04: [
//   [0, 0, 0, 0, 2],
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0],
// ],
// hover11: [
//   [0, 0, 0, 0, 2],
//   [3, 3, 0, 0, 0],
//   [3, 3, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0],
// ],
// click11: [
//   [0, 0, 0, 0, 1],
//   [3, 4, 0, 0, 0],
//   [3, 3, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0],
// ],
// clickAndLeave11: [
//   [0, 0, 0, 0, 1],
//   [1, 2, 0, 0, 0],
//   [1, 1, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0],
// ],

const i = generator()

test('render the table', () => {
  render(<HomePage />)
  const grid = screen.getByRole('table')
  expect(grid).toBeVisible()

  const squares = screen.getAllByLabelText(/square/i)
  squares.forEach(matchMatrixElement(flattenedMatrix5))

  fireEvent.mouseEnter(squares[4])
  squares.forEach(matchMatrixElement(i.next().value.mouseEnter4))

  fireEvent.click(squares[4])
  squares.forEach(matchMatrixElement(i.next().value.click4))

  // fireEvent.mouseLeave(squares[4])
  // squares.forEach(matchMatrixElement(flattenedMatrix5ClickAndLeave04))
  //
  // fireEvent.mouseEnter(squares[6])
  // squares.forEach(matchMatrixElement(flattenedMatrix5Hover11))
  //
  // fireEvent.click(squares[6])
  // squares.forEach(matchMatrixElement(flattenedMatrix5Click11))
  //
  // fireEvent.mouseLeave(squares[6])
  // squares.forEach(matchMatrixElement(flattenedMatrix5ClickAndLeave11))
})
