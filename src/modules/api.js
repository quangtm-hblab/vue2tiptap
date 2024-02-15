import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const getAuthToken = () => {
  let token = cookies.get('auth._token.spf')
  // if (!token) {
  //   // Cookieになければローカルストレージから取得(PC版を想定)
  //   const userInfo = window.dwclUser.getInfo()
  //   const originalToken = userInfo.token
  //   token = originalToken
  // }
  return token
}

export const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Authorization: getAuthToken(),
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 5000 // request timeout
})
