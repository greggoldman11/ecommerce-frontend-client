import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { getAllCarts, removeFromCart } from './../../api/cart'
import Stripe from './../Checkout/Stripe'

class Cart extends Component {
  constructor () {
    super()
    this.state = {
      products: null,
      cartId: null,
      completed: false,
      total: null
    }
  }
  componentDidMount () {
    let total = 0
    getAllCarts(this.props.user)
      .then(allCarts => {
        return (allCarts.data.carts.filter(cart => cart.completed === false))
      })
      .then(res => {
        res[0].products.forEach(product => (total += product.price))
        this.setState({ products: res[0].products, cartId: res[0]._id, total: total })
      })
  }
  render () {
    const { cartId, total } = this.state
    let cartJsx = ''
    const totalJsx = `Your Cart Total Is: $${total}`
    if (this.state.products === null) {
      cartJsx = <Spinner animation="border" variant="warning" />
    } else if (this.state.products.length === 0) {
      cartJsx = <p>You dont have any items in your cart, go add some!</p>
    } else {
      cartJsx =
          this.state.products.map(product => {
            return (
              <div className="cart" key={product._id}>
                <div className="cart-info">
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>

                  <Button
                    onClick={() => {
                      removeFromCart(cartId, product._id, this.props.user)
                        .then(('success'))
                        .then(() => this.props.history.push('/products'))
                        .catch(console.error)
                    }}>
                  Remove From Cart</Button>
                </div>
                <img className="checkout-image" src={product.image}/>
              </div>
            )
          })
    }
    return (
      <Fragment>
        <h2>Cart Page</h2>
        {cartJsx}
        <h3>{totalJsx}</h3>
        <Stripe amount={total} user={this.props.user} cart={cartId} msgAlert={this.props.msgAlert}/>
      </Fragment>
    )
  }
}
export default withRouter(Cart)
