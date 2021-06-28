import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import { getAllCarts } from './../../api/cart'

class Cart extends Component {
  constructor () {
    super()

    this.state = {
      products: null,
      completed: false
    }
  }

  componentDidMount () {
    getAllCarts(this.props.user)
      .then(allCarts => {
        console.log(allCarts)
        return (allCarts.data.carts.filter(cart => cart.completed === false))
      })
      .then(res => {
        console.log(res)
        this.setState({ products: res[0].products })
      })
      .then(res => console.log(res))
  }

handleRemove = (key) => {
  console.log('clicked', key)
}

render () {
  console.log(this.state.products)
  let cartJsx = ''

  if (this.state.products === null) {
    cartJsx = <Spinner animation="border" variant="warning" />
  } else if (this.state.products.length === 0) {
    cartJsx = <p>You dont have any items in your cart, go add some!</p>
  } else {
    cartJsx =
          this.state.products.map(product => {
            return (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={this.handleRemove(product.id)}>Remove From Cart</button>
              </div>
            )
          })
  }

  return (
    <Fragment>
      <h2>Cart Page</h2>
      {cartJsx}
    </Fragment>
  )
}
}

export default withRouter(Cart)
