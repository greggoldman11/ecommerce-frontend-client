import React, { Component } from 'react'

class CheckoutSuccess extends Component {
  constrctuor () {
    super()
    this.class = {
      confirmation: null
    }
  }

  render () {
    return (
      <>
        <h1>Checked Out Successfully!</h1>
        <p>Confirmation: {this.state.confirmation}</p>
      </>
    )
  }
}

export default CheckoutSuccess
