/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
