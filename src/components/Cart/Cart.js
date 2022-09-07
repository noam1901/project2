import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
import CartCard from './CartCard/CartCard'

const Cart = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const cookie = document.cookie.split('=')
    if(!cookie[1]){
      navigate('/')
      return
    }
  },[])
  return (
    <div className='cart-container'>
        <div className='cart'>
          <CartCard></CartCard>
          <CartCard></CartCard>
          <CartCard></CartCard>
          <div className='summary'>
            <div>Total Products: 2</div>
            <div>Total Price: 18$</div>
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