import React, { Component, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { indexProducts } from './../../api/products'
import ProductCard from './ProductCard'

class HomeIndexProducts extends Component {
  constructor () {
    super()
    this.state = {
      products: null
    }
  }

  componentDidMount () {
    indexProducts()
      .then(res => this.setState({ products: res.data.products }))
      .then(console.log(this.state.products))
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
          this.state.products.map((product, index) => (
            index < (this.state.products.length - 3) &&
            <div key={product._id}>
              <ProductCard
                product={product}
                id={product._id}
                name={product.name}
                price={product.price}
              />
            </div>

          ))
    }
    return (
      <Fragment>
        <h2>Featured Products</h2>
        <div className='d-flex'>
          {productsJSX}
        </div>
      </Fragment>
    )
  }
}

export default HomeIndexProducts
