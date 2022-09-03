import React from 'react'
import './Wishlist.css'
import WishlistCard from './WishListCard/WishlistCard'
const Wishlist = () => {
  return (
    <div className='wishlist-container'>
        <h1>Wishlist</h1>
        <WishlistCard></WishlistCard>
        <WishlistCard></WishlistCard>
        <WishlistCard></WishlistCard>
        <button>Clear wishlist</button>
    </div>
  )
}

export default Wishlist