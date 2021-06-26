import React from 'react'
import { CardNumberElement, CardExpiryElement, CardCvcElement, ElementsConsumer } from '@stripe/react-stripe-js'
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
    const cardElement = elements.getElement(CardNumberElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
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
      <Form onSubmit={this.handleSubmit}>
        <CardNumberElement
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
        <CardExpiryElement
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
        <CardCvcElement
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