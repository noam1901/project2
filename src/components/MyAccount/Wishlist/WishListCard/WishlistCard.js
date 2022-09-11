import React from 'react'
import Api from '../../../../DAL/api'
import './WishlistCard.css'

const WishlistCard = (props) => {
  // key={item.productid}
  //       instock={item.UnitInStock}
  //       discount={item.discount}
  //       img={item.imgurl}
  //       name={item.productname}
  //       rating={item.rating}
  //       price={item.unitprice}
  const cookie = document.cookie.split('=')
  async function addToCartButton(){
    if(cookie[1]){
      const response = await Api.AddToCart({userid: +cookie[1],productid: props.prodid,unitprice: props.price, amount: 1 })
      return true
    }else{
      alert('must sign in to add to cart')
      return false
    } 
  }
  async function buyNowButton(){
    const addToCart = await addToCartButton()
    if(addToCart){
      window.location.href = 'http://localhost:3000/cart'
    }
  }
  async function removeFromWishlist(){
    await Api.removeFromWishlist({userid: +cookie[1], productid: props.prodid})
    props.onRemove()
  }
  return (
    <div className='wishlist-product'>
        <div><img src={`../imgs/${props.img}.jpg`} className='wishlist-product-img'></img></div>
        <div><h2>{props.name}</h2></div>
        <div className='wishlist-buttons'>
        {props.instock !== 0?<>
        <button className='add-to-cart-button' onClick={addToCartButton}> Add To Cart</button>
        <button onClick={buyNowButton} className='buy-now-button'>Buy now</button>
        </>:<button disabled> Out of stock</button>}
        </div>
        <div>${props.price}</div>
        <button className='wishlist-button' onClick={removeFromWishlist}>Remove from wishlist</button>
    </div>
  )
}

export default WishlistCard