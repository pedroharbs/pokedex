import axios from 'axios'
import { API } from '../Constants'

const api = axios.create({
  baseURL: API,
})

export default api
