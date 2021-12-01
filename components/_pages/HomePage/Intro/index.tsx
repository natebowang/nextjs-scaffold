import style from './common.module.css'

export function Intro(): JSX.Element {
  return (
    <article className={style.article}>
      <p>Hi,</p>
      <p>
        Thank you for your time reviewing this{' '}
        <a href="https://github.com/auvmacintosh/ava-test">project</a>. <br />
        On top of all the features listed in the document, this project also accomplished the
        following task:
        <br />
        1. Performance: using React.memo to avoid unnecessary renders, SSG pre-render pages.
        <br />
        2. Accessibility: semantic HTML tag, support tab and enter key&apos;s interaction.
        <br />
        3. Security: Synk website scan score is A+. HTTPS, 8 security headers including a basic CSP.
        <br />
        4. Connected components search algorithm: implemented with React.useReducer and a state
        machine.
        <br />
        5. Browser compatibility: tested on the latest Chrome, Firefox and Safari. The newest
        feature used is aspect-ratio. It is well supported across the latest major browsers. I added
        a fallback to display rectangle cells in older browsers. CSS padding tricks or JS can do the
        job if we need to display squares in older browsers.
        <br />
        6. SEO: meta, title.
        <br />
        7. Responsibility: Available on mobile and big screen.
        <br />
        8. Test: TS for static type check, Storybook for UI development and documentation, Jest unit
        test, React Testing Library integration test, Playwright e2e test.
        <br />
        9. Toolchain: Native ES Modules, NVM, Husky, PNPM. I wrote all lines of code and
        configuration in this repo, including the husky shell script.
        <br />
        10. Deployment: Deploy to Vercel. Automatically deploy when pushed to the production branch.
        <br />
        11. Code readability: the components folder structure follows the structure of the DOM tree,
        the pages folder structure follows the structure of the URL. Using enum to represent states
        of a square.
        <br />
        Thanks and all the best,
        <br />
      </p>
      <p>
        Nathan Wang <br />
        auvmacintosh1@gmail.com
      </p>
    </article>
  )
}
