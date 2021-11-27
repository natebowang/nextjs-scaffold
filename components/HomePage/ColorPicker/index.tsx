import style from './common.module.css'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

export type Props = {
  label: string
  cssVariableName: string
}

export default function ColorPicker({ label, cssVariableName }: Props) {
  const [color, setColor] = useState('#aabbcc')

  return (
    <label className={style.label}>
      {label}:
      <HexColorPicker className={style.colorPicker} color={color} onChange={setColor} />
    </label>
  )
}
