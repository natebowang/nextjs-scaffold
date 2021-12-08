import { useReducer } from 'react'
import Square from './Square'
import generateStore from './generateStore'
import reducer from './reducer'
import style from './common.module.css'
import type { ColumnIndex, MatrixArray, MatrixElement, RowIndex } from './_types'

export type Props = {
  n: number
  key: number
}

export default function Grid({ n }: Props): JSX.Element {
  const [{ count, matrix }, dispatch] = useReducer(reducer, n, generateStore)
  console.log(matrix)

  return (
    <>
      <table className={style.table} role="grid">
        <tbody>
          {matrix.map((matrixArray: MatrixArray, x: RowIndex) => (
            <tr className={style.row} key={x} role="row">
              {matrixArray.map((matrixElement: MatrixElement, y: ColumnIndex) => (
                <Square
                  matrixElement={matrixElement}
                  count={count}
                  dispatch={dispatch}
                  index={{ x: x, y }}
                  key={y}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
