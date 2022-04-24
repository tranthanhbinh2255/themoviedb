import { CarouselProvider, Slider } from 'pure-react-carousel'
import React from 'react'
import CardDotGroup from './card-dot-group'
import CardSlider from './card-slider'

const CardCarousel: React.FC<any> = ({}) => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1.25}
    totalSlides={3}
    style={{ width: "300px" }}
  >
    <Slider>
      <CardSlider
        image="/assets/images/demo.jpeg"
        index={0}
        header="Matthew House"
        meta="Friend"
      />
      <CardSlider
        header="Elliot Baker"
        image="/assets/images/demo.jpeg"
        index={1}
        meta="Friend"
      />
      <CardSlider
        header="Steve Sanders"
        image="/assets/images/demo.jpeg"
        index={2}
        meta="Friend"
      />
    </Slider>
    <CardDotGroup slides={3} />
  </CarouselProvider>
)

export default CardCarousel
