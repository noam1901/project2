import React from 'react'
import './OrderCard.css'
const OrderCard = (props) => {
    // key={order.orderId}
    //     address={order.ShipAddress}
    //     items={order.items}
    //     date={order.orderDate}
    //     orderid={order.orderId}
    //     city={order.shipCity}
    //     country={order.shipCountry}
    //     postalCode={order.shipPostalCode}
    function getTotalPrice(){
        let totalPrice = 0
        for(let item of props.items){
            totalPrice += item.unitPrice*item.amount
        }
        return totalPrice
    }
    function getTotalProducts(){
        let totalProducts = 0
        for(let item of props.items){
            totalProducts += item.amount
        }
        return totalProducts
    }
  return (
    <div className='order-card'>  
    <h2>Order No.{props.orderid}</h2>   
        <div className='products-list'>
            {props.items.map(item=>
            <div className='order-product' key={item.productId}>
                <div>{item.productName} x {item.amount}</div>
                <div>${+(item.unitPrice*item.amount).toFixed(2)}</div>
            </div>)}
            <div className='order-product-total'>
                <div>Total Price: ({getTotalProducts()} products)</div>
                <div>${getTotalPrice()}</div>
            </div>
        </div>
        
        <div className='order-details-container'>
            <div className='order-details'>
                <div>date: {props.date}</div>
                <div>Ship Address: {props.address}</div>
                <div>City: {props.city}</div>
                <div>Country: {props.country}</div>
                <div>Postal Code: {props.postalCode}</div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard