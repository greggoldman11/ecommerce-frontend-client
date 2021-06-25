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
<<<<<<< HEAD
            index > 5 &&
            <div className='d-flex'>
              <ProductCard
                key={product.id}
                product={product}
                name={product.name}
                price={product.price}
              />
            </div>
=======
            index > (this.state.products.length - 3) &&
            <ProductCard
              product={product}
              key={product.id}
              name={product.name}
              price={product.price}
            />
>>>>>>> d3145ce (Adds index products for home page)
          ))
    }
    return (
      <Fragment>
        <h2>Featured Products</h2>
        {productsJSX}
      </Fragment>
    )
  }
}

export default HomeIndexProducts
