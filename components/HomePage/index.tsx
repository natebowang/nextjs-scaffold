import ColorPicker from './ColorPicker'
import Grid from './Grid'
import Header from './Header'
import SizeSlider from './SizeSlider'
import style from './common.module.css'
import { useState } from 'react'

export default function HomePage(): JSX.Element {
  const [n, setN] = useState(5)

  return (
    <>
      <Header />
      <main className={style.main}>
        <section>
          <SizeSlider n={n} setN={setN} />
          <ColorPicker
            label="Hover Colour"
            cssVariableName="--hoverColor"
            initColor="hsla(47, 98%, 51%, 1)"
          />
          <ColorPicker
            label="Background Colour"
            cssVariableName="--backgroundColor"
            initColor="hsla(0, 0%, 100%, 1)"
          />
        </section>
        <section>
          <Grid n={n} key={n} />
        </section>
        {/*TODO*/}
        <article>hello</article>
      </main>
    </>
  )
}
