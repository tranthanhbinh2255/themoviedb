import { TokenInfoModel } from '../models/token.model'
import { getConfiguration, getGuessToken } from './movie-api'
import { getAppCookie, removeAppCookie, setAppCookie } from './storage-manager'
import { STORAGE_KEY } from './constants'

const proceedAuthentication = async () => {
  let token = getAppCookie<TokenInfoModel>(STORAGE_KEY.GUESS_SESSION_TOKEN)

  if (!token || new Date(token.expires_at) < new Date()) {
    token = await getGuessToken()
    if (token) {
      setAppCookie(STORAGE_KEY.GUESS_SESSION_TOKEN, token)
    } else {
      removeAppCookie(STORAGE_KEY.GUESS_SESSION_TOKEN)
    }
  }
  return token
}

const getMovieConfiguration = async () => {
  let configuration = getAppCookie<any>(STORAGE_KEY.IMAGE_CONFIGURATION)

  if (!configuration) {
    configuration = await getConfiguration()
    if (configuration) {
      setAppCookie(STORAGE_KEY.IMAGE_CONFIGURATION, configuration)
    } else {
      removeAppCookie(STORAGE_KEY.IMAGE_CONFIGURATION)
    }
  }
  return configuration
}
export { proceedAuthentication, getMovieConfiguration }
