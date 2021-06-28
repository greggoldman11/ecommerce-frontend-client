import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

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
        <div className="cart">
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Cart)
