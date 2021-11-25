import Grid from './Grid'
import Header from './Header'
import style from './common.module.css'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className={style.main}>
        <section>
          <Grid n={5} />
        </section>
      </main>
    </>
  )
}
