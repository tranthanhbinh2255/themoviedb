import { ListMovieItemsModel } from '../models/list-movie-items.model'
import { TokenInfoModel } from '../models/token.model'

const addEndpointToUrl = (url: string, otherQueryParams?: any) => {
  const newUrl = new URL(`${process.env.API_HOST}${url}`)
  newUrl.search = new URLSearchParams({
    api_key: process.env.API_KEY,
    ...otherQueryParams,
  }).toString()
  return newUrl.toString()
}

const getGuessToken = async (): Promise<TokenInfoModel> => {
  const url = addEndpointToUrl('authentication/guest_session/new')

  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return null
  }
}

const getConfiguration = async (): Promise<any> => {
  const url = addEndpointToUrl('configuration')

  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return null
  }
}

const getPopularMovie = async (page = 1): Promise<ListMovieItemsModel> => {
  const url = addEndpointToUrl('movie/popular', { page })

  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return {
      page: 0,
      results: [],
      total_results: 0,
      total_pages: 0,
    }
  }
}

const getTopRateMovie = async (page = 1): Promise<ListMovieItemsModel> => {
  const url = addEndpointToUrl('movie/top_rated', { page })

  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return {
      page: 0,
      results: [],
      total_results: 0,
      total_pages: 0,
    }
  }
}

const getUpCommingMovie = async (page = 1): Promise<ListMovieItemsModel> => {
  const url = addEndpointToUrl('movie/upcoming', { page })

  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return {
      page: 0,
      results: [],
      total_results: 0,
      total_pages: 0,
    }
  }
}

const getTrending = async (
  media_type = 'all',
  time_window = 'week',
  page = 1,
): Promise<ListMovieItemsModel> => {
  const url = addEndpointToUrl(`/trending/${media_type}/${time_window}`, {
    page,
  })

  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    return {
      page: 0,
      results: [],
      total_results: 0,
      total_pages: 0,
    }
  }
}

export {
  addEndpointToUrl,
  getGuessToken,
  getConfiguration,
  getPopularMovie,
  getTopRateMovie,
  getUpCommingMovie,
  getTrending,
}
