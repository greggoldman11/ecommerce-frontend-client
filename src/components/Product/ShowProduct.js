import React, { Component, Fragment } from 'react'

import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { showProduct } from './../../api/products'
import { getAllCarts, addToCart } from './../../api/cart'
import messages from '../AutoDismissAlert/messages'
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
      .then(() => this.props.msgAlert({
        heading: 'Show Product Success',
        message: messages.showProductSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Show Product failure',
        message: messages.showProductFailue,
        variant: 'danger'
      }))
  }

  render () {
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
                      return (allCarts.data.carts.filter(cart => cart.completed === false))
                    })
                    .then((res) => {
                      return this.setState({ cartId: res[0]._id })
                    })
                    .then(() => {
                      addToCart(this.state.cartId, this.state.product._id, this.props.user)
                        .then(() => this.props.history.push('/cart'))
                        .then(() => this.props.msgAlert({
                          heading: 'Add to cart Success',
                          message: messages.addToCartSuccess,
                          variant: 'success'
                        }))
                        .catch(() => this.props.msgAlert({
                          heading: 'Add to cart failure',
                          message: messages.addToCartFailure,
                          variant: 'danger'
                        }))
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
