import React, { useEffect, useState } from 'react'
import Api from '../../../DAL/api'
import './MyOrders.css'
import OrderCard from './OrderCard/OrderCard'

const MyOrders = () => {
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    async function getData(){
      const cookie = document.cookie.split('=')
      const response = await Api.getOrdersByUserId(cookie[1])
      setOrders(response)
    }
    getData()
  },[])
  return (
    <div className='orders-container'> 
        <h1>My Orders</h1>   
        {orders.map(order=><OrderCard key={order.orderId}
        address={order.ShipAddress}
        items={order.items}
        date={order.orderDate}
        orderid={order.orderId}
        city={order.shipCity}
        country={order.shipCountry}
        postalCode={order.shipPostalCode}
        ></OrderCard>)}
         
    </div>
  )
}

export default MyOrders