import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/layout/layout'

const Dashboard: NextPage = () => {
  const title = 'The Movie'
  return (
    <div>
      <Layout title={title} />
    </div>
  )
}

export default Dashboard
