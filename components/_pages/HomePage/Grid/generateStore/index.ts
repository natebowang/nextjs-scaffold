import type { Matrix, MatrixElement } from '../_types'
import type { Store } from '../reducer'

function generateElement(): MatrixElement {
  return Math.round(Math.random()) as MatrixElement
}

function generateMatrix(xN: number, yN: number): Matrix {
  return Array.from(Array(xN), () => Array.from(Array(yN), generateElement))
}

export default function generateStore(n: number): Store {
  return { matrix: generateMatrix(n, n), count: 0 }
}
