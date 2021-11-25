import style from './common.module.css'

export default function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <p>Hey,</p>
      <p>Thank you for your time reviewing this code. </p>
      <p>Nathan Wang</p>
    </header>
  )
}
