<<<<<<< HEAD
import React from 'react'
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import Form from 'react-bootstrap/Form'

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault()

    const { stripe, elements } = this.props

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })

=======
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
>>>>>>> dbb3c3d (Add a checkout component)
    if (error) {
      console.log('[error]', error)
    } else {
      console.log('[PaymentMethod]', paymentMethod)
    }
  }

  render () {
    const { stripe } = this.props
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <form onSubmit={this.handleSubmit}>
=======
      <Form onSubmit={this.handleSubmit}>
>>>>>>> 5e6f9d1 (Adds bootstrap form)
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                ':placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </Form>
    )
  }
}

export default function InjectedCheckoutForm () {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <CheckoutForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
  )
}
=======
      <button></button>
    )
  }
}
>>>>>>> dbb3c3d (Add a checkout component)
