import style from './common.module.css'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

export type Props = {
  label: string
  cssVariableName: string
  defaultColor: string
}

export default function ColorPicker({ label, cssVariableName, defaultColor }: Props) {
  const [color, setColor] = useState(defaultColor)

  return (
    <label className={style.label}>
      {label}:
      <HexColorPicker className={style.colorPicker} color={color} onChange={setColor} />
    </label>
  )
}
