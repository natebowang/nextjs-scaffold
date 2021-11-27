import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import style from './common.module.css'

export type Props = {
  n: number
  setN: Dispatch<SetStateAction<number>>
}

export function Input({ n, setN }: Props): JSX.Element {
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setN(parseInt(value))
  }

  return (
    <label className={style.label}>
      Grid size:
      <input
        className={style.input}
        max="10"
        min="2"
        onChange={handleChange}
        type="range"
        value={n}
      />
    </label>
  )
}
