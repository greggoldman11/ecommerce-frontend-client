import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class ProductCard extends Component {
  constructor () {
    super()
    this.state = {
      product: null
    }
  }

  render () {
    const { product } = this.state
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ProductCard
