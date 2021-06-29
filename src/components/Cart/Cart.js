import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { getAllCarts, removeFromCart } from './../../api/cart'
import Stripe from './../Checkout/Stripe'

class Cart extends Component {
  constructor () {
    super()
    this.state = {
      products: null,
      cartId: null,
      completed: false
    }
  }
  componentDidMount () {
    getAllCarts(this.props.user)
      .then(allCarts => {
        console.log(allCarts)
        return (allCarts.data.carts.filter(cart => cart.completed === false))
      })
      .then(res => {
        console.log(res)
        this.setState({ products: res[0].products, cartId: res[0]._id })
      })
  }
  render () {
    const { cartId, products } = this.state
    console.log(cartId, products)
    let cartJsx = ''
    if (this.state.products === null) {
      cartJsx = <Spinner animation="border" variant="warning" />
    } else if (this.state.products.length === 0) {
      cartJsx = <p>You dont have any items in your cart, go add some!</p>
    } else {
      cartJsx =
          this.state.products.map(product => {
            return (
              <div key={product._id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button
                  onClick={() => {
                    removeFromCart(cartId, products[0]._id, this.props.user)
                      .then(console.log('success'))
                      .then(() => this.props.history.push('/products'))
                      .catch(console.error)
                  }}>
                Remove From Cart</button>
              </div>
            )
          })
    }
    return (
      <Fragment>
        <h2>Cart Page</h2>
        {cartJsx}
        <Stripe />
      </Fragment>
    )
  }
}
export default withRouter(Cart)
