import style from './common.module.css'
import { HexColorPicker } from 'react-colorful'

export type Props = {
  label: string
  cssVariableName: string
}

export default function ColorPicker({ label, cssVariableName }: Props) {
  const setColor = (color: string) => {
    document.documentElement.style.setProperty(cssVariableName, color)
  }

  return (
    <label className={style.label}>
      {label}:
      <HexColorPicker className={style.colorPicker} color={'white'} onChange={setColor} />
    </label>
  )
}
