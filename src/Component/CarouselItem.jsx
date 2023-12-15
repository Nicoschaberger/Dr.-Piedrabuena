import React from 'react'

const CarouselItem = ({ image }) => {
  return (
    <div className='shadow slide-item transition-all'>
        <img src={image} className='object-cover h48 rounded' alt="car" />
        
    </div>
  )
}

export default CarouselItem