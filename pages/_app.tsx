import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../layout/header/header'
import Body from '../layout/body/body'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <script
          src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
          type="text/javascript"
        /> */}
      </Head>
      <Header />
      <Body>
        <Component {...pageProps} />
      </Body>
    </>
  )
}

export default MyApp
