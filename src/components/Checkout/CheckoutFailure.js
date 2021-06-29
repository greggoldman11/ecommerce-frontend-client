import React, { Component } from 'react'

class CheckoutFailure extends Component {
  constructor () {
    super()
    this.state = {
      confirmation: null
    }
  }

  render () {
    return (
      <div>
        <h1>Check Out Failed!</h1>
        <p>Confirmation: {this.state.confirmation}</p>
      </div>
    )
  }
}

export default CheckoutFailure
