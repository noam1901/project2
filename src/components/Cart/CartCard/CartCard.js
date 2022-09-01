import React from 'react'
import './CartCard.css'
const CartCard = () => {
  return (
    <div className='cart-card'>
            <div> 
              <img src="./LOGO.png" className='card-img'></img>
            </div>
            <div>
              <h2>Product Title</h2>
            </div>
            <div className='amount'>
              <div className='amount-button'>+</div>
              <div>2</div>
              <div className='amount-button'>-</div>
            </div>
            <div className='price'>
              <div>18$</div>
            </div>
          </div>
  )
}

export default CartCard