import ColorPicker from './ColorPicker'
import Grid from './Grid'
import Header from './Header'
import Input from './Input'
import style from './common.module.css'
import { useState } from 'react'

export default function HomePage(): JSX.Element {
  const [n, setN] = useState(5)

  return (
    <>
      <Header />
      <main className={style.main}>
        <section>
          <Input n={n} setN={setN} />
          <ColorPicker label="Hover Colour" cssVariableName="" />
          <ColorPicker label="Background Colour" cssVariableName="" />
        </section>
        <section>
          <Grid n={n} />
        </section>
        {/*TODO*/}
        <article>hello</article>
      </main>
    </>
  )
}
