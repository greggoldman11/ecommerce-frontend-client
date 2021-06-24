import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductCard = (product) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
      <Button variant="primary"><Link to={`/products/${product._id}`}>See Product</Link></Button>
    </Card.Body>
  </Card>
)

export default ProductCard