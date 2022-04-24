import { setCookies, getCookie, removeCookies } from 'cookies-next'

const getAppCookie = <T,>(key: string): T => {
  const cookie = getCookie(key);
  if (!cookie) return null
  return cookie ? (JSON.parse(cookie.toString()) as T) : null
}

const setAppCookie = (key: string, data: any) => {
  setCookies(key, data)
}

const removeAppCookie = (key: string) => {
  removeCookies(key)
}
export { getAppCookie, setAppCookie, removeAppCookie }
