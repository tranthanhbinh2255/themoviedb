import React, { useEffect, useState } from 'react'
import {
  Button, Dimmer, Header, Rating, Image, Card,
} from 'semantic-ui-react'
import { MovieItemModel } from '../../models/movie-item.model'
import { getMovieConfiguration } from '../../utils/movie-utils'

interface Props {
  movie: MovieItemModel
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const [isImageHover, setImageHover] = useState(false)
  const [movieConfig, setMovieConfig] = useState(null)
  const content = (
    <div>
      {/* <Header as="h2" inverted>
        Title
      </Header> */}

      <Button primary>Add</Button>
      <Button>View</Button>
    </div>
  )
  useEffect(async () => {
    const configuration = await getMovieConfiguration()
    setMovieConfig(configuration)
  }, [])

  const getImageUrl = (imagePath) => {
    const baseUrl = movieConfig?.images?.base_url
      || movieConfig?.images?.secure_base_url
      || ''
    if (!baseUrl) return ''
    return `${movieConfig?.images?.base_url}/original${imagePath}`
  }

  return (
    <div className="column">
      <Card className="fluid">
        <Dimmer.Dimmable
          as={Image}
          dimmed={isImageHover}
          dimmer={{ active: isImageHover, content }}
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
          src={getImageUrl(movie.poster_path)}
        />
        <Card.Content>
          <Card.Header>{movie.title || movie.original_title}</Card.Header>
          <Card.Meta>
            <span className="date">{movie.release_date}</span>
          </Card.Meta>
          <Card.Description>{movie.overview}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Rating icon="star" defaultRating={3} maxRating={5} disabled />
          </a>
        </Card.Content>
      </Card>
    </div>
  )
}

export default MovieCard
