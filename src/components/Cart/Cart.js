import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

class Cart extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <Fragment>
        <h2>Cart Page</h2>
        <Link to={'/checkout'}>Checkout</Link>
      </Fragment>
    )
  }
}

export default withRouter(Cart)
