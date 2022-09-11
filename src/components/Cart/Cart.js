import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../DAL/api'
import './Cart.css'
import CartCard from './CartCard/CartCard'
import Form from '../Form/Form'
import {FaCity, FaGlobe, FaMapMarkerAlt, FaCodeBranch } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Corngratz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Have a nice day</h4>
        <p>
          Your order iis on the way
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Cart = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate()
  const formInputs = {
    country: {
        id: 1,
        name: 'country',
        label: 'Country',
        placeholder: 'Please enter your country',
        value: '',
        type: 'text',
        validations: {
            required: true
        },
        errors: [],
        icon: FaGlobe,
    },
    city: {
        id: 2,
        name: 'city',
        label: 'City',
        placeholder: "Please enter your city",
        value: '',
        type: 'text',
        validations: {
            required: true
        },
        errors: [],
        icon: FaCity,
    },
    address: {
        id: 3,
        name: 'address',
        label: 'Address',
        placeholder: "Please enter your address",
        value: '',
        type: 'text',
        validations: {
            required: true
        },
        errors: [],
        icon: FaMapMarkerAlt,
    },
    postalCode: {
        id: 4,
        name: 'postalCode',
        label: 'Postal Code',
        placeholder: "Please enter your postalCode",
        value: '',
        type: 'text',
        validations: {},
        errors: [],
        icon: FaCodeBranch,
    }
}
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
  async function clearAllCart(cartid){
    await Api.clearCart(cartid)
    getData()
  }
  function getCartId(){
    if(cart.length === 0){
      return 'noItems'
    }else{
      return cart[0].cartid
    }
  }
  return (
    <div className='cart-container'>
        <div className='cart'>
          {cart.length===0?<h1>No Items in Cart</h1>:cart.map(item=><CartCard key={item.productid}
          prodid={item.productid}
          discount={item.discount}
          img={item.imgurl}
          productname={item.productname}
          rating={item.rating}
          price={item.unitprice}
          amount={item.amount}
          onchange={getData}
          unitinstock={item.UnitInStock}
          cartid={item.cartid}>
          </CartCard>)}
          <div className='summary'>
            <div>Total Products: {totalProducts()}</div>
            <div>Total Price: ${totalPrice()}</div>
          </div>
          <button onClick={()=>clearAllCart(cart[0].cartid)} className="remove-from-cart">Clear Cart</button>
          
          <div className='checkout'>
          <Form formInputs={formInputs} title="Checkout" 
          onSubmit="Checkout"
           req={Api.makeOrder} 
           error="something went wrong" 
           cartid={getCartId()} 
           userid={cookie[1]}
           onSuccess={()=>{setModalShow(true)}}></Form>
          </div>
        </div>   
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => window.location.href='http://localhost:3000/'}
      />
      </div>
  )
}

export default Cart