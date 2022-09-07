import React, { useEffect } from 'react'
import './MyAccount.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const MyAccount = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const cookie = document.cookie.split('=')
    if(!cookie[1]){
      navigate('/')
      return
    }
  },[])
  return (
    <div className='my-account-container'>
        <div className='my-account-nav'>
          <h1>Hello, User</h1>
          <div className='my-account-options'>
            <Link to="/profile/">My details</Link>
            <Link to="/profile/update">Update Name</Link>
            <Link to="/profile/address">My address</Link>
            <Link to="/profile/password">Change password</Link>
            <Link to="/profile/orders">My Orders</Link>
            <Link to="/profile/wishlist">My Wishlist</Link>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
  )
}

export default MyAccount