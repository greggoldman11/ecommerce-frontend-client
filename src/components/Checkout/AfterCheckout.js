import React, { Component } from 'react'

class AfterCheckout extends Component {
  constructor () {
    super()

    this.state = {
      success: false
    }
  }

  // componentDidMount () {
  //
  // }

  render () {
    if (this.state.success) {
      return (
        <p>Success!</p>
      )
    } else {
      return (
        <p>Failure!</p>
      )
    }
  }
}

export default AfterCheckout
