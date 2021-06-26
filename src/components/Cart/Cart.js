import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Cart extends Component {
  constructor () {
    super()

    this.state = {
      completed: false
    }
  }

  render () {
    return (
      <Fragment>
        <h2>Cart Page</h2>
      </Fragment>
    )
  }
}

export default withRouter(Cart)
