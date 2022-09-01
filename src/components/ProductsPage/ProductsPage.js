import React from 'react'
import ProductCard from '../ProductCard/ProductCard.js'

const ProductsPage = () => {
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
          <h1>Sort now</h1>
        </div>
        
      </div>
    </div>
    <div className='cards'>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  </div>
  )
}

export default ProductsPage