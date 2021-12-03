import { GITHUB_REPO } from '../_constants'
import style from './common.module.css'

export default function Header(): JSX.Element {
  return (
    <header className={style.header}>
      <h1>
        <a href={GITHUB_REPO}>Nathan Wang&apos;s Github Repo</a>
      </h1>
    </header>
  )
}
