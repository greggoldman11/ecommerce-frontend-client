import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { getAllCarts } from './../api/cart'

class PastOrders extends Component {
  constructor () {
    super()
    this.state = {
      orders: null
    }
  }

  componentDidMount () {
    getAllCarts(this.props.user)
      .then(allCarts => {
        return (allCarts.data.carts.filter(cart => cart.completed === true))
      })
      .then(carts => {
        if (carts) {
          carts.forEach(cart => {
            console.log(cart, cart.products)
            cart.total = this.productTotals(cart.products)
          })
          return this.setState({ orders: carts })
        }
      })
  }

  productTotals (products) {
    let total = 0
    console.log(products)
    products.forEach(product => {
      total += product.price
    })
    return total
  }

  render () {
    const { orders } = this.state

    let ordersJsx = ''

    if (orders === null) {
      ordersJsx = <Spinner animation="border" variant="warning" />
    } else if (orders.length === 0) {
      ordersJsx = <p>You have no past orders</p>
    } else {
      ordersJsx = orders.map(order => {
        console.log(order)
        return (
          <div className="mb-5" key={order._id}>
            <span className="p-4">Order ID: {order._id}</span>
            <span className="p-4">Order total: ${order.total}</span>
            <span className="p-4">Order quantity: {order.products.length}</span>
          </div>
        )
      })
    }
    return (
      <div>
        <h1 className="mb-5">Your Past Orders</h1>
        {ordersJsx}
      </div>
    )
  }
}

export default PastOrders
