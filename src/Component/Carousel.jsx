import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Consejo1 from '../assets/Consejo1.png'
import Consejo2 from '../assets/Consejo2.png'
import Consejo3 from '../assets/Consejo3.png'
import Consejo4 from '../assets/Consejo4.png'
import Consejo5 from '../assets/Consejo5.png'
import CarouselItem from './CarouselItem';

const images= [Consejo1, Consejo2, Consejo3, Consejo4, Consejo5];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding:'0px',
  };

  const renderImages = () =>
  images.map((image, index) => <CarouselItem key={index} image={image} />);

  
  return (
    <div className='flex items-center justify-center'>
        <div className='w-full'>
          <Slider {...settings}>
            {renderImages()}
          </Slider>
        </div>
    </div>
  );
};

export default Carousel
