import type { Index, Matrix } from '../../_types'
import deepClone from './deepClone'
import changeColor from './changeColor'
import displayCount from './displayCount'
import resetColor from './resetColor'

const POINTER_ENTER = 'pointerenter'
const FOCUS = 'focus'
const POINTER_LEAVE = 'pointerleave'
const BLUR = 'blur'
const POINTER_DOWN = 'pointerdown'
const KEY_DOWN = 'keydown'

export type Store = {
  matrix: Matrix
  count: number
}

export type Action = {
  type: string
  index: Index
}

export default function reducer({ matrix, count }: Store, { type, index }: Action): Store {
  const clonedMatrix = deepClone(matrix)

  switch (type) {
    case POINTER_ENTER:
    case FOCUS:
      return changeColor(clonedMatrix, count, index)
    case POINTER_LEAVE:
    case BLUR:
      return { matrix: resetColor(clonedMatrix), count }
    case POINTER_DOWN:
    case KEY_DOWN:
      return { matrix: displayCount(clonedMatrix, index), count }
    default:
      return { matrix: clonedMatrix, count }
  }
}
