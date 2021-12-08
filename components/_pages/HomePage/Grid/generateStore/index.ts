import generatePseudoRandomNumber from './mulBerry32Prng'
import type { Matrix, MatrixElement } from '../_types'
import type { Store } from '../reducer'

export const initialN = 5

function generateElement(): MatrixElement {
  return Math.round(generatePseudoRandomNumber()) as MatrixElement
}

function generateMatrix(xN: number, yN: number): Matrix {
  return Array.from(Array(xN), () => Array.from(Array(yN), generateElement))
}

export default function generateStore(n: number): Store {
  if (typeof window === 'undefined') {
    return {
      matrix: [
        [0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1],
      ],
      count: 0,
    }
  }
  return { matrix: generateMatrix(n, n), count: 0 }
}
