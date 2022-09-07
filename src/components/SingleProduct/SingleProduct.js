import React, { useEffect, useState } from "react";
import {Carousel , Form, Button, Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import {useParams} from 'react-router-dom'
import Gallery from "./Gallery/Gallery";
import ReviewCard from "./ReviewCard/ReviewCard";
import './SingleProduct.css'
// import { getProductById, getImagesById } from "../api/dal.js";

function SingleProduct(){
  const [product, setProduct] = useState({})
  const [loaded, setLoaded] = useState(false)
  const prodId = useParams()
  useEffect(()=>{
    async function getData(){
        
        setLoaded(true)
    }
    getData()
},[])
    return (
      <div className='single-product-container'>
        <div className="gallery-container">
          <Gallery id={prodId.id}/>
        </div>
        <div className="product-details">
          <h1>Product Title</h1>
          <h5>Product description</h5>
          <div className="price-rating">
            <div>123.9$</div>
            <div>4 ⭐</div>
          </div>
          <div className="btns-group">
            <button>Add to cart</button>
            <button>Buy now</button>
            <button>Add to wishlist</button>
          </div>
        </div>
        <div className="reviews-container">     
          <div className="reviews-cards">
            <h3>reviews:</h3>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
              <ReviewCard></ReviewCard>
          </div>
        </div>
      </div> 


    )
}


export default SingleProduct