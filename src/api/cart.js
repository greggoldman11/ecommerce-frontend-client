import apiUrl from '../apiConfig'
import axios from 'axios'

<<<<<<< HEAD
// This will create the cart when the user signs up
// and after the user signs out
=======
>>>>>>> d3cf1e9 (This commit will add the create axios call and create the cart)
export const createCart = (user) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/cart`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
<<<<<<< HEAD

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
=======
>>>>>>> d3cf1e9 (This commit will add the create axios call and create the cart)
