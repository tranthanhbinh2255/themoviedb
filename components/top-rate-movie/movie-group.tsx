import React, { useEffect, useState } from 'react'
import { Header } from 'semantic-ui-react'
import { ListMovieItemsModel } from '../../models/list-movie-items.model'
import { getTopRateMovie } from '../../utils/movie-api'
import AppPagination from '../layout/pagination'
import MovieListCards from './move-list-cards'

const MovieGroup: React.FC<{}> = ({}) => {
  const [listMovive, setListMovie] = useState<ListMovieItemsModel>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(async () => {
    const movieGroup = await getTopRateMovie(currentPage)
    setListMovie(movieGroup)
  }, [currentPage])

  const onPageChange = (e, { activePage }) => {
    setCurrentPage(activePage)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    listMovive && (
      <div>
        <h1 className="ui center aligned header">TOP RATE MOVIE</h1>
        <div className="ui fluid container">
          <MovieListCards movieItems={listMovive.results} />
          <div className="ui grid container">
            <div className="column">
              <AppPagination
                activePage={currentPage}
                totalPage={
                  listMovive.total_pages > 25 ? 25 : listMovive.total_pages
                }
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default MovieGroup
