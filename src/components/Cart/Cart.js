import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import InjectedCheckoutForm from '../Checkout/Checkout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="Street Address" />
          </Form.Group>

          <Form.Group controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>

          <Form.Group controlId="formBasicState">
            <Form.Label>State</Form.Label>
            <Form.Control type="email" placeholder="State" />
          </Form.Group>

          <Form.Group controlId="formBasicZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="email" placeholder="Zip Code" />
            <Form.Text className="text-muted">
              Well never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Well never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>

      </Fragment>
    )
  }
}

export default withRouter(Cart)
