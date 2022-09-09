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
  return (
    <div className='product-card'>
        <div> 
          <Link to={`${props.id}`}>
            <img src={`imgs/${props.img}.jpg`} className='card-img'></img>
          </Link>
        </div>
        <div className='product-card-title-container'>
          <Link to={`/product/${props.id}`} className="product-card-title">{props.name}</Link>
        </div>
      <div className='product-card-price'>
        <h4>${props.price}</h4>
        <input type='number' className='count-items' defaultValue='1' ref={amount}></input>
        <h4>{+props.rating}⭐</h4>
      </div>
      <div className='buttons'>
        {props.instock !== 0?<>
        <button className='add-to-cart-button' onClick={addToCartButton}> Add To Cart</button></>:<button disabled> Out of stock</button>}
        <button className='wishlist-button'> Add To Wishlist</button>
      </div>
    </div>
  )
}

export default ProductCard