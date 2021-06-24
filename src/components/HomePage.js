import React, { Fragment } from 'react'
// import ProductCard from './Product/ProductCard'
import Carousel from 'react-bootstrap/Carousel'
// import { indexProducts } from './../api/products'

const HomePage = () => {
  // const [products, setProducts] = useState(null)
  // useEffect(() => {
  //   indexProducts()
  //     .then(res => setProducts(res.data.products))
  //   console.log(products)
  //     .catch(console.error)
  // })
  return (
    <Fragment>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1620942331128-55d0a4c93224?ixid=MnwxMjA3fDF8MHxlZGl0[…]58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1624529524740-778dc6c4cad9?ixid=MnwxMjA3fDB8MHxlZGl0[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}

export default HomePage
