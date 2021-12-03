import { CLICK, MOUSE_ENTER, MOUSE_LEAVE } from '../../../../constants'
import type { EventType } from '@testing-library/dom'
import type { Index, Matrix } from '../Grid/_types'

export type GridEvent = {
  type: EventType
  index: Index
  newMatrix: Matrix
}

// TODO: add keyboard events
export const gridEvents5: GridEvent[] = [
  {
    type: MOUSE_ENTER,
    index: { x: 0, y: 4 },
    newMatrix: [
      [0, 0, 0, 0, 3],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
  },
  {
    type: CLICK,
    index: { x: 0, y: 4 },
    newMatrix: [
      [0, 0, 0, 0, 4],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
  },
  {
    type: MOUSE_LEAVE,
    index: { x: 0, y: 4 },
    newMatrix: [
      [0, 0, 0, 0, 2],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
  },
  {
    type: MOUSE_ENTER,
    index: { x: 1, y: 1 },
    newMatrix: [
      [0, 0, 0, 0, 2],
      [3, 3, 0, 0, 0],
      [3, 3, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
  },
  {
    type: CLICK,
    index: { x: 1, y: 1 },
    newMatrix: [
      [0, 0, 0, 0, 1],
      [3, 4, 0, 0, 0],
      [3, 3, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
  },
  {
    type: MOUSE_LEAVE,
    index: { x: 1, y: 1 },
    newMatrix: [
      [0, 0, 0, 0, 1],
      [1, 2, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0],
    ],
  },
]
