import React, { Component, Fragment } from 'react'

import { withRouter } from 'react-router-dom'

import { showProduct } from './../../api/products'

class ShowProduct extends Component {
  constructor () {
    super()
    this.state = {
      product: null
    }
  }

  componentDidMount () {
    const { match } = this.props
    showProduct(match.params.id)
      .then(res => this.setState({ product: res.data.product }))
      .then(console.log(this.state))
  }

  render () {
    return (
      <Fragment>
        <h2>Show Product Page</h2>
      </Fragment>
    )
  }
}

export default withRouter(ShowProduct)
