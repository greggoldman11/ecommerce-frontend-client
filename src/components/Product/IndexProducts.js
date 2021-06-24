import React, { Component, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { indexProducts } from './../../api/products'
import ProductCard from './ProductCard'

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
      .catch(console.error)
  }

  render () {
    console.log(this.state.products)
    let productsJSX = ''

    if (this.state.products === null) {
      productsJSX = <Spinner animation="border" variant="warning" />
    } else if (this.state.products.length === 0) {
      productsJSX = <p>No products to display!</p>
    } else {
      productsJSX =
          this.state.products.map(product => (
            <ProductCard
              product={product}
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))
    }
    return (
      <Fragment>
        <h2>Products Index Page</h2>
        {productsJSX}
      </Fragment>
    )
  }
}

export default IndexProducts
