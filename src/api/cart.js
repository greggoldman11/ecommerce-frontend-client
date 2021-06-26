import apiUrl from '../apiConfig'
import axios from 'axios'

// This will create the cart when the user signs up
// and after the user signs out
export const createCart = (user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/cart`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// This will add get a single Cart
export const getCart = (id, user) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/cart/${id}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
