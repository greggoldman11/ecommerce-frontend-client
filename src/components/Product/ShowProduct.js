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
    const { product } = this.state

    let productJsx = ''

    if (product === null) {
      productJsx = 'Loading...'
    } else {
      productJsx = (
        <Fragment>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <h2>Show Product Page</h2>
        {productJsx}
      </Fragment>
    )
  }
}

export default withRouter(ShowProduct)
