import React, { Component } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe('pk_test_51J6FY8B3vfOMXNO3v2s6ihzCGfLtVhNiEO74qYeRUEBT0f3QVdkMqgkeEGGt8pZGX7SfVlh8DFYAmYSAJLNx8rCb008hIxE0mi')

export default class CheckoutForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const { stripe, elements } = this.props

    if (!stripe || !elements) {

    }

    // const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = stripe.createPaymentMethod({
      type: 'card',
      card: CardElement
    })
    if (error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
    }
  }

  render () {
    const { stripe } = this.props
    return (
      <button></button>
    )
  }
}
