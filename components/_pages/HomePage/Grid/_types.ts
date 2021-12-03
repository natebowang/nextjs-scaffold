export type MatrixElement = 0 | 1 | 2 | 3 | 4
export enum ElementState {
  EMPTY = 0,
  FILLED = 1,
  FILLED_WITH_COUNT = 2,
  CONNECTED = 3,
  CONNECTED_WITH_COUNT = 4,
}
export type MatrixArray = MatrixElement[]
export type FlattenedMatrix = MatrixElement[]
export type Matrix = MatrixArray[]

export type RowIndex = number
export type ColumnIndex = number
export type Index = { x: RowIndex; y: ColumnIndex }
