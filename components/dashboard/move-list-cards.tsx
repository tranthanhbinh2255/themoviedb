import React from 'react'
import { MovieItemModel } from '../../models/movie-item.model'
import MovieCard from './movie-card'

interface Props {
  movieItems: MovieItemModel[]
}

const MovieListCards: React.FC<Props> = ({ movieItems }) => (
  <div className="doubling stackable ui three column grid container special cards">
    {movieItems.map((mv) => (
      <MovieCard movie={mv} />
    ))}
  </div>
)

export default MovieListCards
