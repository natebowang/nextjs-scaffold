import type { Matrix, MatrixArray } from '../../_types'

function deepCloneArray(matrixArray: MatrixArray) {
  return matrixArray.slice()
}

export default function deepClone(matrix: Matrix): Matrix {
  return matrix.map(deepCloneArray)
}
