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

enum DomEvent {
  MOUSE_ENTER = 'mouseenter',
  FOCUS = 'focus',
  MOUSE_LEAVE = 'mouseleave',
  BLUR = 'blur',
  CLICK = 'click',
  KEY_DOWN = 'keydown',
}

export default function reducer({ count, matrix }: Store, { index, type }: Action): Store {
  const clonedMatrix = deepClone(matrix)

  switch (type) {
    case DomEvent.MOUSE_ENTER:
    case DomEvent.FOCUS:
      return changeColor(clonedMatrix, count, index)
    case DomEvent.MOUSE_LEAVE:
    case DomEvent.BLUR:
      return { matrix: resetColor(clonedMatrix), count }
    case DomEvent.CLICK:
    case DomEvent.KEY_DOWN:
      return { matrix: displayCount(clonedMatrix, index), count }
    default:
      return { matrix: clonedMatrix, count }
  }
}
