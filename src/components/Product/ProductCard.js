import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { addToCart } from './../../api/cart'

// const handleClick = (product) => {
//   console.log('clicked', product)
// }

const ProductCard = (product) => (
  <Card style={{ width: '18rem' }} key={product._id}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
      <Button variant="primary"><Link className="button-link" to={`/products/${product.id}`}>See Product</Link></Button>
      <Button variant="primary" onClick={() => {
        addToCart()
      }}>Add To Cart</Button>
    </Card.Body>
  </Card>
)

export default ProductCard
