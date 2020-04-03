import axios from 'axios'
import { HOST } from '../config'

export default () => {
  const baseURL = `${HOST}/`
  axios.interceptors.request.use(config => config, error => {
    console.error(error)
    Promise.reject(error)
  })

  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
