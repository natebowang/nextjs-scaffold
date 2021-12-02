import { ElementState } from '../../_types'
import type { Matrix } from '../../_types'

const { CONNECTED, CONNECTED_WITH_COUNT, FILLED, FILLED_WITH_COUNT } = ElementState

export default function resetColor(clonedMatrix: Matrix): Matrix {
  clonedMatrix.forEach((matrixArray, x) => {
    matrixArray.forEach((matrixElement, y) => {
      const isConnected = clonedMatrix[x][y] === CONNECTED
      const isConnectedWithCount = clonedMatrix[x][y] === CONNECTED_WITH_COUNT

      if (isConnected) clonedMatrix[x][y] = FILLED
      if (isConnectedWithCount) clonedMatrix[x][y] = FILLED_WITH_COUNT
    })
  })

  return clonedMatrix
}
