import { MovieItemModel } from './movie-item.model'

export interface ListMovieItemsModel {
  page: number
  results: MovieItemModel[]
  total_pages: number
  total_results: number
}
