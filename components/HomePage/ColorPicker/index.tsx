import { useEffect, useState } from 'react'
import style from './common.module.css'
import { HslaStringColorPicker } from 'react-colorful'

export type Props = {
  label: string
  cssVariableName: string
  initColor: string
}

export default function ColorPicker({ label, cssVariableName, initColor }: Props) {
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
