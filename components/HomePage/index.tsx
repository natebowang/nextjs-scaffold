import Grid from './Grid'
import Header from './Header'
import style from './common.module.css'
import { Input } from './Input'
import { useState } from 'react'

export default function HomePage(): JSX.Element {
  const [n, setN] = useState(5)

  return (
    <>
      <Header />
      <main className={style.main}>
        <section>
          <Input n={n} setN={setN} />
        </section>
        <section>
          <h2 className={style.h2}>Grid: </h2>
          <Grid n={n} />
        </section>
      </main>
    </>
  )
}
