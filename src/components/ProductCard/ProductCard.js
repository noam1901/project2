import React from 'react'
import './ProductCard.css'
function ProductCard() {
  return (
    <div className='card'>
      <div> 
        <img src="./LOGO.png" className='card-img'></img>
      </div>
      <div>
        <h2>Product Title</h2>
      </div>
      <div>
        <h4>lorem ipsum</h4>
      </div>
      <div className='buttons'>
        <button> Buy Now</button>
        <button> Add To Cart</button>
        <button className='wishlist-button'> Add To Wishlist</button>
      </div>
    </div>
  )
}

export default ProductCard