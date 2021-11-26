import Grid from './Grid'
import Header from './Header'
import style from './common.module.css'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <h2 className={style.h2}>Grid: </h2>
      <main className={style.main}>
        <section>
          <h2 className={style.h2}>Grid: </h2>
          <Grid n={5} />
        </section>
      </main>
    </>
  )
}
