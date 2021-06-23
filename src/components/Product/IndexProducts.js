import React, { Component, Fragment } from 'react'

import { indexProducts } from './../../api/products'

class IndexProducts extends Component {
  constructor () {
    super()
    this.state = {
      products: null
    }
  }

  componentDidMount () {
    indexProducts()
      .then(res => this.setState({ products: res.data.products }))
  }

  render () {
    return (
      <Fragment>
        <h2>Index movies page</h2>
      </Fragment>
    )
  }
}

export default IndexProducts
