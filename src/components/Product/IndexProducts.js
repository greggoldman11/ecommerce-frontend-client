import React, { Component, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { indexProducts } from './../../api/products'
import ProductCard from './ProductCard'
import messages from '../AutoDismissAlert/messages'

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
      .then(() => this.props.msgAlert({
        heading: 'Show Products Success',
        message: messages.indexProductsSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Show Products failure',
        message: messages.indexProductsFailue,
        variant: 'danger'
      }))
  }

  render () {
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
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={product._id}>
                <ProductCard
                  user={this.props.user}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            )
          })
    }
    return (
      <Fragment>
        <h2>All Products</h2>
        <div className='d-flex row'>
          {productsJSX}
        </div>
      </Fragment>
    )
  }
}

export default IndexProducts
