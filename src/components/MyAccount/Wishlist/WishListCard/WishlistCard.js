import React from 'react'
import './WishlistCard.css'
const WishlistCard = () => {
  return (
    <div className='wishlist-product'>
        <div><img src='../LOGO.png' className='wishlist-product-img'></img></div>
        <div><h2>Product Title</h2></div>
        <div className='wishlist-buttons'>
            <button>add to cart</button>
            <button>Buy Now</button>
        </div>
        <button className='wishlist-button'>Remove from wishlist</button>
    </div>
  )
}

export default WishlistCard