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
            index > (this.state.products.length - 4) &&
            <div key={product._id} className='d-flex row'>
              <ProductCard className="col-4"
                id={product._id}
                product={product}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          ))
    }
    return (
      <Fragment>
        <h2>Featured Products</h2>
        <div className="d-flex">
          {productsJSX}
        </div>
      </Fragment>
    )
  }
}

export default HomeIndexProducts
