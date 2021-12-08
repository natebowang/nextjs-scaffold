import { Intro } from './Intro'
import { initialN } from './Grid/generateStore/_constants'
import { useState } from 'react'
import ColorPicker from './ColorPicker'
import Grid from './Grid'
import Head from 'next/head'
import Header from './Header'
import SizeSlider from './SizeSlider'
import style from './common.module.css'

export default function HomePage(): JSX.Element {
  const [n, setN] = useState(initialN)

  return (
    <>
      <Head>
        <title key="title">Nextjs Scaffold</title>
        <meta name="description" content="Nextjs Scaffold" />
      </Head>
      <Header />
      <main className={style.main}>
        <section>
          <h2 className={style.h2}>Grid: </h2>
          <Grid n={n} key={n} />
        </section>
        <section>
          <h2 className={style.h2}>Grid Controls: </h2>
          <SizeSlider n={n} setN={setN} />
          <ColorPicker
            label="Background Colour"
            cssVariableName="--backgroundColor"
            initColor="hsla(0, 0%, 100%, 1)"
          />
          <ColorPicker
            label="Hover Colour"
            cssVariableName="--hoverColor"
            initColor="hsla(47, 98%, 51%, 1)"
          />
        </section>
        <Intro />
      </main>
    </>
  )
}
