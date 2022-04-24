import React, { useEffect, useState } from 'react'
import { ListMovieItemsModel } from '../../models/list-movie-items.model'
import { getTrending } from '../../utils/movie-api'
import AppPagination from '../layout/pagination'
import MovieListCards from './move-list-cards'

const MovieGroup: React.FC<{}> = ({}) => {
  const [listMovive, setListMovie] = useState<ListMovieItemsModel>(null)

  useEffect(async () => {
    const movieGroup = await getTrending()
    setListMovie(movieGroup)
  }, [])

  return listMovive && (
    <div>
      <h3 className="ui center aligned header">Trending</h3>
      <div className="ui fluid container">
        <MovieListCards movieItems={listMovive.results} />
        <div className="ui grid container">
          <div className="column">
            <AppPagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieGroup
