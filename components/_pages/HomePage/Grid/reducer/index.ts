import changeColor from './changeColor'
import deepClone from './deepClone'
import displayCount from './displayCount'
import resetColor from './resetColor'
import type { Index, Matrix } from '../_types'

const MOUSE_ENTER = 'mouseenter'
const FOCUS = 'focus'
const MOUSE_LEAVE = 'mouseleave'
const BLUR = 'blur'
const CLICK = 'click'
const KEY_DOWN = 'keydown'

export type Store = {
  matrix: Matrix
  count: number
}

export type Action = {
  type: string
  index: Index
}

export default function reducer({ count, matrix }: Store, { index, type }: Action): Store {
  const clonedMatrix = deepClone(matrix)

  switch (type) {
    case MOUSE_ENTER:
    case FOCUS:
      return changeColor(clonedMatrix, count, index)
    case MOUSE_LEAVE:
    case BLUR:
      return { matrix: resetColor(clonedMatrix), count }
    case CLICK:
    case KEY_DOWN:
      return { matrix: displayCount(clonedMatrix, index), count }
    default:
      return { matrix: clonedMatrix, count }
  }
}
