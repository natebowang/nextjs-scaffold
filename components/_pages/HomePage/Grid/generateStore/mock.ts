import type { Store } from '../reducer'

const storeMap: Record<number, Store> = {
  3: {
    matrix: [
      [0, 0, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    count: 0,
  },
  5: {
    matrix: [
      [0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
    count: 0,
  },
}

export default function mockGenerateStore(n: number): Store {
  return storeMap[n]
}
