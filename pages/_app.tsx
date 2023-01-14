import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, createClient, Client } from 'urql'

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}