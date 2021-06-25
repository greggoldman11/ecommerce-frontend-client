import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCart = (user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/cart`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
