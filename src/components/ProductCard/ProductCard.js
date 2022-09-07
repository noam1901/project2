import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
function ProductCard(props) {
  return (
    <div className='product-card'>
        <div> 
          <Link to={`${props.id}`}>
            <img src={`imgs/${props.img}.jpg`} className='card-img'></img>
          </Link>
        </div>
        <div className='product-card-title-container'>
          <Link to={`${props.id}`} className="product-card-title">{props.name}</Link>
        </div>
      <div className='product-card-price'>
        <h4>{props.price}$</h4>
        <h4>{+props.rating}⭐</h4>
      </div>
      <div className='buttons'>
        {props.instock !== 0?<>
        <button> Add To Cart</button></>:<button disabled> Out of stock</button>}
        <button className='wishlist-button'> Add To Wishlist</button>
      </div>
    </div>
  )
}

export default ProductCard