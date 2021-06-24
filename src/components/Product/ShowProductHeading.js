import React, { Component, Fragment } from 'react'

class ShowProductHeading extends Component {
  constructor () {
    super()

    this.state = {
      product: null
    }
  }
  render () {
    const { product } = this.props
    const productName = product.name
    return (
      <Fragment>
        {productName}
      </Fragment>
    )
  }
}

export default ShowProductHeading
