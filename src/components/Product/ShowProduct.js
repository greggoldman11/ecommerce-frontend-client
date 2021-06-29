import React, { Component, Fragment } from 'react'

import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { showProduct } from './../../api/products'
import { getAllCarts, addToCart } from './../../api/cart'
// import ShowProductHeading from './ShowProductHeading'

class ShowProduct extends Component {
  constructor () {
    super()
    this.state = {
      product: null,
      userId: null,
      cartId: null
    }
  }

  componentDidMount () {
    this.setState({ userId: this.props.user })
    const { match } = this.props
    showProduct(match.params.id)
      .then(res => this.setState({ product: res.data.product }))
      .catch(console.error)
  }

  render () {
    console.log(this.props)
    const { product, userId } = this.state
    let productJsx = ''

    if (product === null) {
      productJsx = 'Loading...'
    } else {
      productJsx = (
        <Fragment>
          <div className="show-product">
            <div className="show-product-info">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              {userId
                ? <Button className="add-to-cart-button" onClick={() => {
                  getAllCarts(this.props.user)
                    .then(allCarts => {
                      console.log(allCarts)
                      return (allCarts.data.carts.filter(cart => cart.completed === false))
                    })
                    .then((res) => {
                      return this.setState({ cartId: res[0]._id })
                    })
                    .then(() => console.log(this.state.cartId))
                    .then(() => {
                      addToCart(this.state.cartId, this.state.product._id, this.props.user)
                        .then(console.log('success'))
                        .then(() => this.props.history.push('/cart'))
                    })
                }
                }>Add to cart</Button>
                : ''}
            </div>
            <img className="show-product-image" src={product.image}/>
          </div>
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
