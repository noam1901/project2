import React from 'react'
import './MyOrders.css'
import OrderCard from './OrderCard/OrderCard'
const MyOrders = () => {
  return (
    <div className='orders-container'> 
        <h1>My Orders</h1>   
        <OrderCard></OrderCard>
        <OrderCard></OrderCard>   
    </div>
  )
}

export default MyOrders