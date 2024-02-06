import style from './common.module.css'

export default function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <h1>
        <a href="https://github.com/natebowang/nextjs-scaffold">Nathan Wang&apos;s Github Repo</a>
      </h1>
    </header>
  )
}
