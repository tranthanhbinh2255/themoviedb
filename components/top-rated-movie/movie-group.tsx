import React, { useEffect, useState } from 'react'
import { Select } from 'semantic-ui-react'
import { ListMovieItemsModel } from '../../models/list-movie-items.model'
import { MovieItemModel } from '../../models/movie-item.model'
import { getTopRateMovie } from '../../utils/movie-api'
import AppPagination from '../layout/pagination'
import MovieListCards from './move-list-cards'

const MovieGroup: React.FC<any> = () => {
  const [listMovie, setListMovie] = useState<ListMovieItemsModel>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [movieListing, setMovieListing] = useState<MovieItemModel[]>([])
  const [order, setOrder] = useState<string>('')

  useEffect(() => {
    const getTopRated = async () => {
      const movieGroup = await getTopRateMovie(currentPage)
      setListMovie(movieGroup)
      setMovieListing([...movieGroup.results])
    }
    getTopRated()
  }, [currentPage])

  const onPageChange = (e, { activePage }) => {
    setCurrentPage(activePage)
    setOrder('')
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const orderOptions = [
    { key: 'name-asc', value: 'name-asc', text: 'Name - Asc' },
    { key: 'name-desc', value: 'name-desc', text: 'Name - Desc' },
  ]

  const onchangeOrder = (event, { value }) => {
    setOrder(value)
  }

  const handleOrderChange = () => {
    let currMovie = listMovie ? [...listMovie.results] : []
    const sortDirection = order.split('-')[1]
    if (sortDirection) {
      currMovie = [...listMovie.results].sort((prevMv, nextMv) => {
        const prevMovieName = prevMv.title || prevMv.original_title || ''
        const nextMovieName = nextMv.title || nextMv.original_title || ''
        if (sortDirection === 'asc') {
          return prevMovieName > nextMovieName ? 1 : -1
        }
        return prevMovieName > nextMovieName ? -1 : 1
      })
    }

    setMovieListing(currMovie)
  }

  useEffect(() => {
    handleOrderChange()
  }, [order])

  return (
    listMovie && (
      <div>
        <div className="ui container grid">
          <h1
            className="ui center aligned header column"
            style={{ marginTop: '1em' }}
          >
            TOP RATED MOVIE
          </h1>
        </div>
        <div className="ui container grid">
          <div className="right aligned column">
            <Select
              placeholder="Order"
              options={orderOptions}
              onChange={onchangeOrder}
              value={order}
              clearable
            />
          </div>
        </div>
        <div className="ui fluid container">
          <MovieListCards movieItems={movieListing} />
          <div className="ui grid container">
            <div className="column">
              <AppPagination
                activePage={currentPage}
                totalPage={
                  listMovie.total_pages > 25 ? 25 : listMovie.total_pages
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
