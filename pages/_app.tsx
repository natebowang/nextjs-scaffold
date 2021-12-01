import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="" />
        <title key="title">Nextjs Scaffold</title>
        <meta name="description" content="Nextjs Scaffold" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
