import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import BigBanner from '../components/dashboard/big-banner'
import MovieListGroups from '../components/dashboard/movie-list-groups'
import { proceedAuthentication } from '../utils/movie-utils'

const Dashboard: NextPage = ({ ...props }) => {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(async () => {
    const token = await proceedAuthentication()
    if (token) {
      setAccessToken(token)
    }
  }, [])

  return (
    accessToken && (
      <div>
        <div>
          <BigBanner />
        </div>
        <div>
          <MovieListGroups />
        </div>
      </div>
    )
  )
}
export default Dashboard
