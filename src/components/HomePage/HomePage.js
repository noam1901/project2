import React, { useEffect, useState } from 'react'
import Api from '../../DAL/api'
import ProductCard from '../ProductCard/ProductCard'
import './HomePage.css'
function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    async function getData(){
      const response = await Api.getTopProductsOnePhoto()
      setProducts(response)
    }
    getData()
  },[])
  return (
    <div className='home-page'>
        <div className='title'>
          <h1>Welcome ! </h1>
          <h3>explore !!</h3>
        </div>
        <div className='top-rating'>
          <h1>Top Rating</h1>
          <div className='cards'>
          {products.map((product)=><ProductCard key={product.productid} 
      id={product.productid} 
      description={product.Description} 
      instock={product.UnitInStock} 
      discount={product.discount}
      img={product.imgurl}
      name={product.productname}
      rating={product.rating}
      price={product.unitprice}></ProductCard>)}
          </div>
        </div>
      </div>
  )
}

export default HomePage