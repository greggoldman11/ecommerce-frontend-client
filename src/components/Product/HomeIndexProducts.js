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
      .catch()
  }

  render () {
    let productsJSX = ''

    if (this.state.products === null) {
      productsJSX = <Spinner animation="border" variant="warning" />
    } else if (this.state.products.length === 0) {
      productsJSX = <p>No products to display!</p>
    } else {
      productsJSX =
          this.state.products.map((product, index) => {
            return index < 4 &&
              <div key={product._id} className='col-lg-3 col-md-6'>
                <ProductCard
                  id={product._id}
                  product={product}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
          })
    }
    return (
      <Fragment>
        <h2>Featured Products</h2>
        <div className="home-index-products justify-content-center row">
          {productsJSX}
        </div>
      </Fragment>
    )
  }
}

export default HomeIndexProducts
