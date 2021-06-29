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
        console.log(allCarts)
        return (allCarts.data.carts.filter(cart => cart.completed === true))
      })
      .then(carts => {
        if (carts) {
          this.setState({ orders: carts })
        }
      })
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
        return (
          <div key={order._id}>hey</div>
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
