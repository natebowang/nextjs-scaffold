import Row from './Row'
import Square from './Row/Square'
import generateMatrix from './generateMatrix'
import reducer from './reducer'
import style from './common.module.css'
import type { ColumnIndex, MatrixArray, MatrixElement, RowIndex } from '../_types'
import { useReducer } from 'react'

export type Props = {
  n: number
}

export default function Grid({ n }: Props): JSX.Element {
  const [{ matrix, count }, dispatch] = useReducer(reducer, n, generateMatrix)

  return (
    <div className={style.matrix}>
      {matrix.map((matrixArray: MatrixArray, x: RowIndex) => (
        <Row key={x}>
          {matrixArray.map((matrixElement: MatrixElement, y: ColumnIndex) => (
            <Square
              matrixElement={matrixElement}
              count={count}
              dispatch={dispatch}
              index={{ x: x, y }}
              key={y}
            />
          ))}
        </Row>
      ))}
    </div>
  )
}
