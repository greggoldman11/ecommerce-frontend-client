import React, { Component, Fragment } from 'react'

import { withRouter, Link } from 'react-router-dom'

import { showProduct } from './../../api/products'
// import ShowProductHeading from './ShowProductHeading'

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
      .catch(console.error)
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
          <p>{product.description}</p>
          <img src={product.image}/>
        </Fragment>
      )
    }
    return (
      <Fragment>
        {productJsx}
        <div className="show-product">
          <Link className="go-back-link" to={'/products/'}>Back To All Products</Link>
        </div>
      </Fragment>
    )
  }
}

// <img className="show-product-image" src={product.image}/>

export default withRouter(ShowProduct)
