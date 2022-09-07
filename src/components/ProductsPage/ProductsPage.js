import React, { useEffect, useState } from 'react'
import Api from '../../DAL/api.js'
import ProductCard from '../ProductCard/ProductCard.js'
import './ProductsPage.css'
const ProductsPage = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    async function getData(){
      const response = await Api.getAllProductsOnePhoto()
      setProducts(response)
    }
    getData()
  },[])
  console.log(products);
  return (
    <div className='products-page'>
    <div className='sortbar'>
      <div className='sortbar-content'>
        <div className='categories'>
          <h1>Categories:</h1>
          <div className='categories-container'>
            <div><input type='checkbox'></input>Category1</div>
            <div><input type='checkbox'></input>Category1</div>
            <div><input type='checkbox'></input>Category1</div>
            <div><input type='checkbox'></input>Category1</div>
          </div>
        </div>
        <div className='prices'>
            <h1>Prices:</h1>
            <div className='prices-container'>
                <div>Min price:<input type='number' defaultValue='0'></input></div>
                <div>Max price:<input type='number' defaultValue='9999'></input></div>
            </div>
        </div> 
        <div className='sort-button'>
          <div>Sort now</div>
        </div>
        
      </div>
    </div>
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
  )
}

export default ProductsPage