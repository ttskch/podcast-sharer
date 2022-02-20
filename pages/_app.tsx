import 'antd/dist/antd.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>podcast-sharer</title>
      </Head>
      <NextNprogress
        color="#89a8fa"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{showSpinner: false}}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
