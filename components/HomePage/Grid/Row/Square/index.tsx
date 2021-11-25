import style from './common.module.css'
import type { Action } from '../../reducer'
import type { MatrixElement, Index } from '../../_types'
import { ElementState } from '../../_types'
import { Dispatch, FocusEvent, KeyboardEvent, PointerEvent, ReactNode, memo } from 'react'

const { EMPTY, FILLED, FILLED_WITH_COUNT, CONNECTED, CONNECTED_WITH_COUNT } = ElementState

export type Props = {
  matrixElement: MatrixElement
  count: number
  dispatch: Dispatch<Action>
  index: Index
}

function areEqual(prevProps: Props, nextProps: Props) {
  return (
    prevProps.matrixElement === nextProps.matrixElement &&
    prevProps.index.x === nextProps.index.x &&
    prevProps.index.y === nextProps.index.y
  )
}

export default memo(function Square({ matrixElement, count, dispatch, index }: Props): JSX.Element {
  const changeState = (
    event:
      | PointerEvent<HTMLButtonElement>
      | FocusEvent<HTMLButtonElement>
      | KeyboardEvent<HTMLButtonElement>,
  ) => {
    const { type } = event

    if (!event.hasOwnProperty('key')) {
      // Point event or focus event
      dispatch({ type, index })
    } else if ((event as KeyboardEvent<HTMLButtonElement>).key === 'Enter') {
      // Keyboard event of pressing enter
      dispatch({ type, index })
    }
  }

  const squareMap: Record<MatrixElement, ReactNode> = {
    [EMPTY]: <div className={style.empty}>&nbsp;</div>,
    [FILLED]: (
      <button className={style.filled} onPointerEnter={changeState} onFocus={changeState}>
        &nbsp;
      </button>
    ),
    [FILLED_WITH_COUNT]: (
      <button className={style.filled} onPointerEnter={changeState} onFocus={changeState}>
        {count}
      </button>
    ),
    [CONNECTED]: (
      <button
        className={style.connected}
        onPointerEnter={changeState}
        onFocus={changeState}
        onPointerLeave={changeState}
        onBlur={changeState}
        onPointerDown={changeState}
        onKeyDown={changeState}
      >
        &nbsp;
      </button>
    ),
    [CONNECTED_WITH_COUNT]: (
      <button
        className={style.connected}
        onPointerEnter={changeState}
        onFocus={changeState}
        onPointerLeave={changeState}
        onBlur={changeState}
        onPointerDown={changeState}
        onKeyDown={changeState}
      >
        {count}
      </button>
    ),
  }

  return <>{squareMap[matrixElement]}</>
}, areEqual)
