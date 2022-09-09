import React, { useEffect, useRef, useState } from "react";
import {Carousel , Form, Button, Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import {useParams} from 'react-router-dom'
import Api from "../../DAL/api";
import Gallery from "./Gallery/Gallery";
import ReviewCard from "./ReviewCard/ReviewCard";
import './SingleProduct.css'

function SingleProduct(){
  const [product, setProduct] = useState({})
  const [ratings, setRatings] = useState([])
  const prodId = useParams()
  const amount = useRef(1)
  async function addToCartButton(){
    const cookie = document.cookie.split('=')
    if(cookie[1]){
      const response = await Api.AddToCart({userid: +cookie[1],productid: product.productid,unitprice: product.unitprice, amount: amount.current.value })
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
  useEffect(()=>{
    async function getData(){
        const productDetails = await Api.getProductById(prodId.id)
        const ratings = await Api.getRatingById(prodId.id)
        setProduct(productDetails[0])  
        setRatings(ratings)
    }
    getData()
},[])
console.log(product, ratings);
    return (
      <div className='single-product-container'>
        <div className="gallery-container">
          <Gallery id={prodId.id}/>
        </div>
        <div className="product-details">
          <h1 className="single-product-title">{product.productname}</h1>
          <h5>{product.Description}</h5>
          <div className="price-rating">
            <div>${product.unitprice}</div>
            <div><input type='number' className='count-items-product' defaultValue='1' min='1' max={product.UnitInStock} ref={amount}></input></div>
            <div>{+product.rating} ⭐</div>
          </div>
          <div className="btns-group">
          {product.UnitInStock !== 0?<>
        <button className='add-to-cart-button' onClick={addToCartButton}> Add To Cart</button>
        <button onClick={buyNowButton} className='buy-now-button'>Buy now</button>
        </>:<button disabled> Out of stock</button>}
            <button className="wishlist-button">Add to wishlist</button>
          </div>
        </div>
        <div className="reviews-container">     
          <div className="reviews-cards">
            <h3>reviews:</h3>
              {ratings.map(rev=><ReviewCard key={rev.RatingID}
              fullname={rev.fullname}
              review={rev.review}
              rating={rev.rating}></ReviewCard>)}
          </div>
        </div>
      </div> 


    )
}


export default SingleProduct