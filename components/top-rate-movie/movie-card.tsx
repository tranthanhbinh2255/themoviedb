import React, { useEffect, useState } from 'react'
import { Button, Dimmer, Rating, Image, Card } from 'semantic-ui-react'
import { MovieItemModel } from '../../models/movie-item.model'
import { STORAGE_KEY } from '../../utils/constants'
import { getMovieConfiguration } from '../../utils/movie-utils'
import { getAppCookie, setAppCookie } from '../../utils/storage-manager'

interface Props {
  movie: MovieItemModel
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const [isImageHover, setImageHover] = useState(false)
  const [movieConfig, setMovieConfig] = useState(null)
  const [movieRate, setMovieRate] = useState(0)

  useEffect(async () => {
    const configuration = await getMovieConfiguration()
    setMovieConfig(configuration)
  }, [])

  const retrieveMovieRate = () => {
    const ratedMovies: any[] = getAppCookie(STORAGE_KEY.RATED_MOVIES) || []
    const rateMovie = ratedMovies.find((x) => x.id === movie.id)
    return rateMovie?.rating || 0
  }

  useEffect(() => {
    setMovieRate(retrieveMovieRate())
  }, [movie.id])

  const storeSelectedMovie = (rating: number) => {
    let ratedMovies: any[] = getAppCookie(STORAGE_KEY.RATED_MOVIES) || []
    if (rating && !ratedMovies.includes(movie.id)) {
      ratedMovies.push({ id: movie.id, rating })
    }
    if (!rating) {
      ratedMovies = ratedMovies.filter((mv) => mv.id !== movie.id)
    }
    setAppCookie(STORAGE_KEY.RATED_MOVIES, ratedMovies)
  }

  const onRateVideo = (event, { rating }) => {
    setMovieRate(rating)
    storeSelectedMovie(rating)
  }

  const getImageUrl = (imagePath) => {
    const baseUrl =
      movieConfig?.images?.base_url ||
      movieConfig?.images?.secure_base_url ||
      ''
    if (!baseUrl) return ''
    return `${movieConfig?.images?.base_url}/original${imagePath}`
  }

  const dimmerContent = (
    <div>
      <Button primary>Play</Button>
      <Button>Detail</Button>
    </div>
  )

  return (
    <div className="column">
      <Card className="fluid full-height" color={movieRate ? 'red' : null}>
        <Dimmer.Dimmable
          as={Image}
          dimmed={isImageHover}
          dimmer={{ active: isImageHover, content: dimmerContent }}
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
          src={getImageUrl(movie.poster_path)}
        />
        <Card.Content>
          <Card.Header>{movie.title || movie.original_title}</Card.Header>
          <Card.Meta>
            <p className="date">{movie.release_date}</p>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <span className="right floated">
            {`Rating ${movie.vote_average}`}
          </span>
          <a>
            <Rating
              icon="star"
              rating={movieRate}
              maxRating={5}
              clearable
              onRate={onRateVideo}
            />
          </a>
        </Card.Content>
      </Card>
    </div>
  )
}

export default MovieCard
