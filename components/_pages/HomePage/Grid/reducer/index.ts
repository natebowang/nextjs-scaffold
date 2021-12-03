import { BLUR, CLICK, FOCUS, KEY_DOWN, MOUSE_ENTER, MOUSE_LEAVE } from '../../../../../constants'
import changeColor from './changeColor'
import deepClone from './deepClone'
import displayCount from './displayCount'
import resetColor from './resetColor'
import type { Index, Matrix } from '../_types'

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
    case MOUSE_ENTER.toLowerCase():
    case FOCUS:
      return changeColor(clonedMatrix, count, index)
    case MOUSE_LEAVE.toLowerCase():
    case BLUR:
      return { matrix: resetColor(clonedMatrix), count }
    case CLICK:
    case KEY_DOWN.toLowerCase():
      return { matrix: displayCount(clonedMatrix, index), count }
    default:
      return { matrix: clonedMatrix, count }
  }
}
