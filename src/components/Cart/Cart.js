import React from 'react'
import './Cart.css'
import CartCard from './CartCard/CartCard'
const Cart = () => {
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
          <div className='checkout'>
            <div className='checkout-button'>Checkout</div>
          </div>
        </div>   
      </div>
  )
}

export default Cart