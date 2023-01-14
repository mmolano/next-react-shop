import type { ReactNode } from "react";
import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>E-commerce</title>
      <meta name="description" content="Next e-commerce application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Next.JS E-Commerce Applications</h1>
      {children}
    </main>
  </>
);