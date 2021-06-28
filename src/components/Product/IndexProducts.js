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
    // const maxShown = 3
    // let shown = 0

    if (this.state.products === null) {
      productsJSX = <Spinner animation="border" variant="warning" />
    } else if (this.state.products.length === 0) {
      productsJSX = <p>No products to display!</p>
    } else {
      productsJSX =
          this.state.products.map(product => {
            console.log(product)
            return (
              <div key={product._id}>
                <ProductCard
                  id={product._id}
                  name={product.name}
                  price={product.price}
                />
              </div>
            )
          })
    }
    return (
      <Fragment>
        <h2>All Products</h2>
        <div className='d-flex'>
          {productsJSX}
        </div>
      </Fragment>
    )
  }
}

export default IndexProducts
