import { Dispatch, FocusEvent, KeyboardEvent, MouseEvent, ReactNode, memo } from 'react'
import { ElementState } from '../_types'
import style from './common.module.css'
import type { Action } from '../reducer'
import type { Index, MatrixElement } from '../_types'

const { CONNECTED, CONNECTED_WITH_COUNT, EMPTY, FILLED, FILLED_WITH_COUNT } = ElementState

export type Props = {
  matrixElement: MatrixElement
  count: number
  dispatch: Dispatch<Action>
  index: Index
}

function areEqual(prevProps: Props, nextProps: Props) {
  return prevProps.matrixElement === nextProps.matrixElement
}

export default memo(function Square({ count, dispatch, index, matrixElement }: Props): JSX.Element {
  const changeState = (
    event:
      | MouseEvent<HTMLTableCellElement>
      | FocusEvent<HTMLTableCellElement>
      | KeyboardEvent<HTMLTableCellElement>,
  ) => {
    const { type } = event

    if (!Object.prototype.hasOwnProperty.call(event, 'key')) {
      // Mouse event or focus event
      dispatch({ type, index })
    } else if ((event as KeyboardEvent<HTMLTableCellElement>).key === 'Enter') {
      // Keyboard event of pressing enter
      dispatch({ type, index })
    }
  }

  const squareMap: Record<MatrixElement, ReactNode> = {
    [EMPTY]: (
      <td aria-label="empty square" className={[style.td, style.empty].join(' ')} role="gridcell">
        &nbsp;
      </td>
    ),
    [FILLED]: (
      <td
        aria-label="filled square"
        className={[style.td, style.filled].join(' ')}
        onFocus={changeState}
        onMouseEnter={changeState}
        role="gridcell"
      >
        &nbsp;
      </td>
    ),
    [FILLED_WITH_COUNT]: (
      <td
        aria-label="filled square with count"
        className={[style.td, style.filled].join(' ')}
        onFocus={changeState}
        onMouseEnter={changeState}
        role="gridcell"
      >
        {count}
      </td>
    ),
    [CONNECTED]: (
      <td
        aria-label="connected square"
        className={[style.td, style.connected].join(' ')}
        onBlur={changeState}
        onClick={changeState}
        onFocus={changeState}
        onKeyDown={changeState}
        onMouseEnter={changeState}
        onMouseLeave={changeState}
        role="gridcell"
      >
        &nbsp;
      </td>
    ),
    [CONNECTED_WITH_COUNT]: (
      <td
        aria-label="connected square with count"
        className={[style.td, style.connected].join(' ')}
        onBlur={changeState}
        onClick={changeState}
        onFocus={changeState}
        onKeyDown={changeState}
        onMouseEnter={changeState}
        onMouseLeave={changeState}
        role="gridcell"
      >
        {count}
      </td>
    ),
  }

  return <>{squareMap[matrixElement]}</>
}, areEqual)
