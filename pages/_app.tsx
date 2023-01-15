import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, createClient, Client } from 'urql'
import Head from 'next/head';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Next e-commerce application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}