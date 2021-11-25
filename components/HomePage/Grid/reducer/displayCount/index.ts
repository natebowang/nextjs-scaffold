import type { Index, Matrix, MatrixArray } from '../../_types'
import { ElementState } from '../../_types'

const { FILLED, FILLED_WITH_COUNT, CONNECTED, CONNECTED_WITH_COUNT } = ElementState

export default function displayCount(
  clonedMatrix: Matrix,
  { x: currentX, y: currentY }: Index,
): Matrix {
  clonedMatrix.forEach((matrixArray, x) => {
    matrixArray.forEach((matrixElement, y) => {
      const isFilledWithCount = clonedMatrix[x][y] === FILLED_WITH_COUNT
      const isConnectedWithCount = clonedMatrix[x][y] === CONNECTED_WITH_COUNT

      if (isFilledWithCount) clonedMatrix[x][y] = FILLED
      if (isConnectedWithCount) clonedMatrix[x][y] = CONNECTED
    })
  })

  clonedMatrix[currentX][currentY] = CONNECTED_WITH_COUNT

  return clonedMatrix
}
