import React from 'react'
import { CardNumberElement, CardExpiryElement, CardCvcElement, ElementsConsumer } from '@stripe/react-stripe-js'
import Form from 'react-bootstrap/Form'

import onCheckout from './../../api/products'

const fieldStyles = {
  iconStyle: 'solid',
  style: {
    base: {
      border: '12px solid #000000',
      iconColor: '#c4f0ff',
      color: '#3111f1',
      padding: '30px',
      fontWeight: 500,
      fontSize: '16px',
      textShadow: '1px 1px 2px pink',
      '::placeholder': {
        color: '#87bbfd'
      }
    },
    invalid: {
      iconColor: '#f60600',
      color: '#f60600'
    }
  }
}

class StripeForm extends React.Component {
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
      onCheckout()
        .then(console.log('[PaymentMethod]', paymentMethod))
        .catch(console.log('[error]', error))
    }
  }

  render () {
    const { stripe } = this.props
    return (
      <div className="payment-box">
        <Form className="stripe-form" onSubmit={this.handleSubmit}>
          <Form.Group>
            <CardNumberElement
              options={ fieldStyles }
            />
          </Form.Group>
          <Form.Group>
            <CardExpiryElement
              options={ fieldStyles }
            />
          </Form.Group>
          <Form.Group>
            <CardCvcElement
              options={ fieldStyles }
            />
          </Form.Group>
          <button type="submit" disabled={!stripe}>
          Pay
          </button>
        </Form>
      </div>
    )
  }
}

export default function InjectedCheckoutForm () {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <StripeForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
  )
}
