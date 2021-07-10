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
          this.setState({ orders: carts })
        }
      })
  }

  productTotals (products) {
    let total = 0
    console.log(products)
    products.reduce(product => {
      total += product.price
    })
    return total
  }

  orderTotal () {
    const { orders } = this.state
    console.log(orders)
    let total = 0
    const productTotals = this.productTotals()
    orders.reduce(order => {
      total += productTotals(order.products)
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
          <div key={order._id}>
            <span>{this.orderTotal(this.productTotals(order.products))}</span>
          </div>
        )
      })
    }
    return (
      <div>
        {ordersJsx}
      </div>
    )
  }
}

export default PastOrders
