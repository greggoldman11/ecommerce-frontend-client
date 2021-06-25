import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

<<<<<<< HEAD
<<<<<<< HEAD
const ProductCard = (product) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="primary"><Link to={`/products/${product.id}`}>See Product</Link></Button>
        <Button variant="primary" >Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}
=======
=======
// const handleClick = (product) => {
//   console.log('clicked', product)
// }

>>>>>>> 2fd63b3 (Add the show product)
const ProductCard = (product) => (
  <Card style={{ width: '18rem' }} key={product._id}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.price}
      </Card.Text>
      <Button variant="primary"><Link to={`/products/${product.id}`}>See Product</Link></Button>
    </Card.Body>
  </Card>
)
>>>>>>> 9b9dcdb (Update the home index style)

export default ProductCard
