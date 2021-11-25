import style from './common.module.css'
import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode[]
}

export default function Row({ children }: Props): JSX.Element {
  return <div className={style.row}>{children}</div>
}
