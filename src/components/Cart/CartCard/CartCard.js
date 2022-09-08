import React, { useRef } from 'react'
import Api from '../../../DAL/api'
import './CartCard.css'

const CartCard = (props) => {
  const amount = useRef(1)
  async function addToCartChange(){
    const cookie = document.cookie.split('=')
    const response = await Api.AddToCart({userid: +cookie[1],productid: props.prodid,unitprice: props.price, amount: +amount.current.value })
    props.onchange()
  }
  function totalPrice(){
    return props.price*props.amount
  }
  return (
    <div className='cart-card'>
            <div> 
              <img src={`imgs/${props.img}.jpg`} className='card-img-cart'></img>
            </div>
            <div className='cart-product-name'>
              <h4>{props.productname}</h4>
            </div>
            <div className='amount'>
            <input type='number' className='count-items' defaultValue={props.amount} ref={amount} onChange={addToCartChange}></input>
            <button>Remove</button>
            </div>
            <div className='price'>
              <div>${totalPrice()}</div>
            </div>
          </div>
  )
}

export default CartCard