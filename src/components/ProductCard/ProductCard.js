import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../DAL/api'
import './ProductCard.css'
function ProductCard(props) {
  const amount = useRef(1)
  async function addToCartButton(){
    const cookie = document.cookie.split('=')
    if(cookie[1]){
      const response = await Api.AddToCart({userid: +cookie[1],productid: props.id,unitprice: props.price, amount: amount.current.value })
    }else{
      alert('must sign in to add to cart')
    }
    
  }
  async function addToWishlistButton(){
    const cookie = document.cookie.split('=')
    if(cookie[1]){
      const response = await Api.AddToWishlist({userid: +cookie[1],productid: props.id})
    }else{
      alert('must sign in to add to cart')
    }
    
  }
  return (
    <div className='product-card'>
        <div> 
          <Link to={`/product/${props.id}`}>
            <img src={`imgs/${props.img}.jpg`} className='card-img'></img>
          </Link>
        </div>
        <div className='product-card-title-container'>
          <Link to={`/product/${props.id}`} className="product-card-title">{props.name}</Link>
        </div>
      <div className='product-card-price'>
        <h4>${props.price}</h4>
        <div>
          <span className='count-item-click' onClick={()=>amount.current.value==='1'?amount.current.value=amount.current.value:amount.current.value--}>-</span>
            <input type='number' className='count-items' defaultValue='1' min='1' max={props.instock} ref={amount}></input>
          <span className='count-item-click' onClick={()=>+amount.current.value===props.instock?amount.current.value=amount.current.value:amount.current.value++}>+</span>
        </div>
        <h4>{+props.rating}⭐</h4>
      </div>
      <div className='buttons'>
        {props.instock !== 0?<>
        <button className='add-to-cart-button' onClick={addToCartButton}> Add To Cart</button></>:<button disabled> Out of stock</button>}
        <button className='wishlist-button' onClick={addToWishlistButton}> Add To Wishlist</button>
      </div>
    </div>
  )
}

export default ProductCard