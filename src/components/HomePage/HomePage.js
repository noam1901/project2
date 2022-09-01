import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './HomePage.css'
function HomePage() {
  return (
    <div className='home-page'>
        <div className='title'>
          <h1>Welcome ! </h1>
          <h3>explore !!</h3>
        </div>
        <div className='top-rating'>
          <h1>Top Rating</h1>
          <div className='cards'>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
  )
}

export default HomePage