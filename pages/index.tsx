import { Layout } from '../components/Layout/layout'
import { Products } from '../components/Product/Products'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Next e-commerce application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Products />
      </Layout>
    </>
  )
}