import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { withRouter } from 'react-router-dom'
import { createCart, completeCart } from '../../api/cart.js'
import messages from '../AutoDismissAlert/messages'

class Checkout extends Component {
  onToken = (token) => {
    completeCart(this.props.cart, this.props.user)
      .then(createCart(this.props.user))
      .then(() => this.props.history.push('/'))
      .then(() => this.props.msgAlert({
        heading: 'Checkout Success',
        message: messages.checkoutSuccess,
        variant: 'success'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Checkout failure',
        message: messages.checkoutFailue,
        variant: 'danger'
      }))
  }

  render () {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey={'pk_test_51J6FY8B3vfOMXNO3v2s6ihzCGfLtVhNiEO74qYeRUEBT0f3QVdkMqgkeEGGt8pZGX7SfVlh8DFYAmYSAJLNx8rCb008hIxE0mi'}
        billingAddress
        shippingAddress
        amount={this.props.amount * 100}
      />
    )
  }
}

export default withRouter(Checkout)
