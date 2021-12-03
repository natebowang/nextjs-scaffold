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
      | MouseEvent<HTMLButtonElement>
      | FocusEvent<HTMLButtonElement>
      | KeyboardEvent<HTMLButtonElement>,
  ) => {
    const { type } = event
    if (!Object.prototype.hasOwnProperty.call(event, 'key')) {
      // Mouse event or focus event
      dispatch({ type, index })
    } else if ((event as KeyboardEvent<HTMLButtonElement>).key === 'Enter') {
      // Keyboard event of pressing enter
      dispatch({ type, index })
    }
  }

  const squareMap: Record<MatrixElement, ReactNode> = {
    [EMPTY]: (
      <div aria-label="empty square" className={style.empty}>
        &nbsp;
      </div>
    ),
    [FILLED]: (
      <button
        aria-label="filled square"
        className={style.filled}
        onMouseEnter={changeState}
        onFocus={changeState}
      >
        &nbsp;
      </button>
    ),
    [FILLED_WITH_COUNT]: (
      <button
        aria-label="filled square with count"
        className={style.filled}
        onMouseEnter={changeState}
        onFocus={changeState}
      >
        {count}
      </button>
    ),
    [CONNECTED]: (
      <button
        aria-label="connected square"
        className={style.connected}
        onMouseEnter={changeState}
        onFocus={changeState}
        onMouseLeave={changeState}
        onBlur={changeState}
        onClick={changeState}
        onKeyDown={changeState}
      >
        &nbsp;
      </button>
    ),
    [CONNECTED_WITH_COUNT]: (
      <button
        aria-label="connected square with count"
        className={style.connected}
        onMouseEnter={changeState}
        onFocus={changeState}
        onMouseLeave={changeState}
        onBlur={changeState}
        onClick={changeState}
        onKeyDown={changeState}
      >
        {count}
      </button>
    ),
  }

  return <td className={style.td}>{squareMap[matrixElement]}</td>
}, areEqual)
