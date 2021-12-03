import type { Matrix } from '../_types'
import type { Store } from '../reducer'

export const mockMatrix3: Matrix = [
  [0, 0, 1],
  [0, 1, 1],
  [1, 0, 1],
]

export const mockMatrix5: Matrix = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0],
]

const storeMap: Record<number, Store> = {
  3: {
    matrix: mockMatrix3,
    count: 0,
  },
  5: {
    matrix: mockMatrix5,
    count: 0,
  },
}

export default function mock(n: number): Store {
  return storeMap[n]
}
