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

// This will add get all Carts
export const getAllCarts = (user) => {
  return axios({
    method: 'get',
    url: `${apiUrl}/cart`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// this commit will add item to Cart
export const addToCart = (cartId, productId, user) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/cart/${cartId}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      'product': productId
    }
  })
}

// this commit will remove item from Cart
export const removeFromCart = (cartId, productId, user) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/cart-delete/${cartId}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      'product': productId
    }
  })
}
