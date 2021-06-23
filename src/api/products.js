import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexProducts = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/products'
  })
}

export const showProduct = productId => {
  return axios({
    method: 'GET',
    url: apiUrl + `/products/${productId}`
  })
}
