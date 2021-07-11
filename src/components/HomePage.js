import React, { Fragment } from 'react'
// import ProductCard from './Product/ProductCard'
import Carousel from 'react-bootstrap/Carousel'
import HomeIndexProducts from './Product/HomeIndexProducts'

const HomePage = () => {
  return (
    <Fragment>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/D4hhhNr/photo-1506224772180-d75b3efbe9be.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Donuts On Donuts</h3>
            <p>The best quality with the best ingredients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/7z6MMJ9/photo-1527515545081-5db817172677.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Unique Flavors? We got em</h3>
            <p>From chocolate to strawberry to unicorn, we got it all.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://i.ibb.co/KjNsFhf/photo-1597586255676-6b33b6268e33.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Packed fresh and shipped to your door</h3>
            <p>We got you like that.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HomeIndexProducts />
    </Fragment>

  )
}

export default HomePage
