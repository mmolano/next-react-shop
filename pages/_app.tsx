import { UserProvider } from '@auth0/nextjs-auth0/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createClient, Provider } from 'urql';
import { Header } from '../components/Layout/Header/Header';
import { StateContext } from '../lib/Product/context';
import '../styles/globals.css';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API! });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Head>
            <title>E-commerce</title>
            <meta name="description" content="Next e-commerce application" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <Component {...pageProps} />
          <ToastContainer limit={4} />
        </Provider>
      </StateContext>
    </UserProvider>
  )
}