import generateMatrix from '.'
import type { Matrix } from '../_types'

const matrix: Matrix = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0],
]

// TODO: complete the unit test
test('generateMatrix', () => {
  expect(generateMatrix(2).matrix.length).toEqual(2)
})
