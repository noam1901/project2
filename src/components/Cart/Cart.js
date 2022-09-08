import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../DAL/api'
import './Cart.css'
import CartCard from './CartCard/CartCard'
const Cart = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const cookie = document.cookie.split('=')
  async function getData(){
        const response = await Api.getProductsCart(cookie[1])
        setCart(response)
      }
  useEffect(()=>{
    
    if(!cookie[1]){
      navigate('/')
      return
    }else {
      getData()
    }
  },[])
  function totalPrice(){
    let totalPrice = 0
    for(let item of cart){
      totalPrice += item.unitprice*item.amount
    }
    return totalPrice.toFixed(2)
  }
  function totalProducts(){
    let totalPrice = 0
    for(let item of cart){
      totalPrice += item.amount
    }
    return totalPrice
  }
  return (
    <div className='cart-container'>
        <div className='cart'>
          {cart.map(item=><CartCard key={item.productid}
          prodid={item.productid}
          discount={item.discount}
          img={item.imgurl}
          productname={item.productname}
          rating={item.rating}
          price={item.unitprice}
          amount={item.amount}
          onchange={getData}></CartCard>)}
          <div className='summary'>
            <div>Total Products: {totalProducts()}</div>
            <div>Total Price: ${totalPrice()}</div>
          </div>
          <button>Clear Cart</button>
          
          <div className='checkout'>
            <div className='checkout-button'>Checkout</div>
          </div>
        </div>   
      </div>
  )
}

export default Cart