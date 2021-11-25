import type { Index, Matrix } from '../../../_types'
import type { Store } from '../index'
import { ElementState } from '../../../_types'

const { FILLED, FILLED_WITH_COUNT, CONNECTED, CONNECTED_WITH_COUNT } = ElementState

export default function changeColor(
  clonedMatrix: Matrix,
  prevCount: number,
  currentIndex: Index,
): Store {
  const xN = clonedMatrix.length
  const yN = xN > 0 ? clonedMatrix[0].length : 0
  const stack: Index[] = [currentIndex]

  const pushIfIsConnected = ({ x, y }: Index): void => {
    const isInBounds = x >= 0 && y >= 0 && x < xN && y < yN
    const isFilledOrFilledWithCount =
      clonedMatrix?.[x]?.[y] === FILLED || clonedMatrix?.[x]?.[y] === FILLED_WITH_COUNT

    if (isInBounds && isFilledOrFilledWithCount) {
      stack.push({ x: x, y })
    }
  }

  const { x: currentX, y: currentY } = currentIndex
  const isFilled = clonedMatrix[currentX][currentY] === FILLED
  const isFilledWithCount = clonedMatrix[currentX][currentY] === FILLED_WITH_COUNT
  let nextCount = isFilled || isFilledWithCount ? 0 : prevCount

  while (stack.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { x, y } = stack.pop()!
    const isFilled = clonedMatrix[x][y] === FILLED
    const isFilledWithCount = clonedMatrix[x][y] === FILLED_WITH_COUNT

    if (isFilled || isFilledWithCount) {
      nextCount++
      if (isFilled) clonedMatrix[x][y] = CONNECTED
      if (isFilledWithCount) clonedMatrix[x][y] = CONNECTED_WITH_COUNT
      pushIfIsConnected({ x: x + 1, y })
      pushIfIsConnected({ x: x - 1, y })
      pushIfIsConnected({ x: x, y: y + 1 })
      pushIfIsConnected({ x: x, y: y - 1 })
    }
  }

  return { matrix: clonedMatrix, count: nextCount }
}
