import React from 'react'
import './OrderCard.css'
const OrderCard = () => {
  return (
    <div className='order-card'>  
    <h2>Order No.1</h2>   
        <div className='products-list'>
            <div className='order-product'>
                <div>Product1 x 2</div>
                <div>29.90$</div>
            </div>
            <div className='order-product'>
                <div>Product2 x 4</div>
                <div>229.90$</div>
            </div>
            <div className='order-product-total'>
                <div>Total Price: (6 products)</div>
                <div>278.89$</div>
            </div>
        </div>
        
        <div className='order-details-container'>
            <div className='order-details'>
                <div>date: 2021-09-26 00:00:00</div>
                <div>Ship Address: 51343 6th Crossing</div>
                <div>City: Zungeru</div>
                <div>Country: Nigeria</div>
                <div>Postal Code: null</div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard