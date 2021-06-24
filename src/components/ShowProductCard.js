import React, { Component, Fragment } from 'react'

import { withRouter } from 'react-router-dom'

import { showProduct } from './../../api/products'
import ProductCard from './ProductCard'

class ShowProductCard extends Component {
  constructor () {
    super()
    this.state = {
      product1: '60d3c985515294fcc765f0f4',
      product2: '60d3c985515294fcc765f0f4',
      product3: '60d3c985515294fcc765f0f4'
    }
  }

  componentDidMount () {
    const { match } = this.props
    showProduct(match.params.id)
      .then(res => this.setState({ product: res.data.product }))
      .then(console.log(this.state))
  }

  render () {
    const { product1, product2, product3 } = this.state

    return (
      <Fragment className="d-flex">
        <ProductCard key={product1}/>
        <ProductCard key={product2}/>
        <ProductCard key={product3}/>
      </Fragment>
    )
  }
}

export default withRouter(ShowProductCard)
