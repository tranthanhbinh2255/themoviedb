import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import BigBanner from '../components/top-rated-movie/big-banner'
import MovieListGroups from '../components/top-rated-movie/movie-list-groups'
import { proceedAuthentication } from '../utils/movie-utils'

const TopRateMovie: NextPage = ({ ...props }) => {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const proceedAuth = async () => {
      const token = await proceedAuthentication()
      if (token) {
        setAccessToken(token)
      }
    }
    proceedAuth()
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
export default TopRateMovie
