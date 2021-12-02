import { HslaStringColorPicker } from 'react-colorful'
import style from './common.module.css'

export type Props = {
  label: string
  cssVariableName: string
  initColor: string
}

export default function ColorPicker({ cssVariableName, initColor, label }: Props) {
  const setColor = (color: string) => {
    document.documentElement.style.setProperty(cssVariableName, color)
  }

  return (
    <label className={style.label}>
      {label}:
      <HslaStringColorPicker className={style.colorPicker} color={initColor} onChange={setColor} />
    </label>
  )
}
