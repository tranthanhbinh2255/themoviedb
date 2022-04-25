import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Body from '../layout/body/body'
import Header from '../layout/header/header'
import '../styles/globals.scss'

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
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </Body>
    </>
  )
}

export default MyApp
