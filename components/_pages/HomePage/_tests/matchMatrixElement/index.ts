import { ElementState, Matrix, MatrixElement } from '../../Grid/_types'

const accessibleNameMap: Record<MatrixElement, RegExp> = {
  [ElementState.EMPTY]: /empty square/i,
  [ElementState.FILLED]: /filled square$/i,
  [ElementState.FILLED_WITH_COUNT]: /filled square with count/i,
  [ElementState.CONNECTED]: /connected square$/i,
  [ElementState.CONNECTED_WITH_COUNT]: /connected square with count/i,
}

export default function matchMatrixElement(matrix: Matrix) {
  const flattenedMatrix = matrix.flat()
  return (square: HTMLElement, i: number) => {
    expect(square).toHaveAccessibleName(accessibleNameMap[flattenedMatrix[i]])
  }
}
