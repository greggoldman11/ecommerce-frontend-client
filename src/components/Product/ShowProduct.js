import React, { Component, Fragment } from 'react'

import { withRouter } from 'react-router-dom'

import { showProduct } from './../../api/products'
// import ShowProductHeading from './ShowProductHeading'

class ShowProduct extends Component {
  constructor () {
    super()
    this.state = {
      product: null
    }
  }

  componentDidMount () {
    const { match } = this.props
    showProduct(match.params.id)
      .then(res => this.setState({ product: res.data.product }))
      .then(console.log(this.state))
  }

  render () {
    const { product } = this.state
    let productJsx = ''

    if (product === null) {
      productJsx = 'Loading...'
    } else {
      productJsx = (
        <Fragment>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </Fragment>
      )
    }
    return (
      <Fragment>
        {productJsx}
        <div>
          <img src='https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(ShowProduct)
