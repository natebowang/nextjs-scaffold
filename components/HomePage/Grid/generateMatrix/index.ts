import type { Matrix } from '../_types'
import type { Store } from '../reducer'

export const defaultMatrix: Matrix = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0],
]

export default function generateMatrix(n: number): Store {
  return { matrix: defaultMatrix, count: 0 }
}
