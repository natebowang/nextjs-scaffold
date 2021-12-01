import type { Matrix } from '../../_types'
import { ElementState } from '../../_types'

const { FILLED, FILLED_WITH_COUNT, CONNECTED, CONNECTED_WITH_COUNT } = ElementState

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
