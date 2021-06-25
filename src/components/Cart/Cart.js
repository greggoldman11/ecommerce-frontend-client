import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import InjectedCheckoutForm from '../Checkout/Checkout'

const stripePromise = loadStripe('pk_test_51J6FY8B3vfOMXNO3v2s6ihzCGfLtVhNiEO74qYeRUEBT0f3QVdkMqgkeEGGt8pZGX7SfVlh8DFYAmYSAJLNx8rCb008hIxE0mi')
class Cart extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <Fragment>
        <h2>Cart Page</h2>
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>

      </Fragment>
    )
  }
}

export default withRouter(Cart)
