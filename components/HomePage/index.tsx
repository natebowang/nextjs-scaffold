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
          <Grid n={n} key={n} />
        </section>
        <section>
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
        <article>
          <p>Hi,</p>
          <p>
            Thank you for your time reviewing this{' '}
            <a href="https://github.com/auvmacintosh/ava-test">project</a>. <br />
            On top of all the features listed in the document, this project also accomplished the
            following task:
            <br />
            1. Performance: using useStore and memo to avoid unnecessary renders, SSR pre-render
            pages.
            <br />
            2. Accessibility: semantic HTML tag, support tab and enter key&apos;s interaction.
            <br />
            3. Security: Synk website scan score is A+. HTTPS, 8 security headers including a basic
            CSP.
            <br />
            4. Browser compatibility: tested on the latest Chrome, Firefox and Safari. The latest
            feature used is aspect-ratio. It is well supported across the latest major browsers. I
            added a fallback to display rectangle cells in older browsers. CSS padding tricks or JS
            can do the job if we need to display squares in older browsers.
            <br />
            5. SEO: meta, title.
            <br />
            6. Test: TS for static type check, Storybook for UI development and documentation, Jest
            unit test, React Testing Library integration test, Playwright e2e test.
            <br />
            7. Toolchain: Native ES Modules, NVM, Husky, PNPM.
            <br />
            8. Deployment: Deploy to Vercel. Automatically deploy when pushed to the production
            branch.
            <br />
            9. Code readability: the components folder structure follows the structure of the DOM
            tree, the pages folder structure follows the structure of the URL.
            <br />
            Thanks and all the best,
            <br />
          </p>
          <p>
            Nathan Wang <br />
            auvmacintosh1@gmail.com
          </p>
        </article>
      </main>
    </>
  )
}
