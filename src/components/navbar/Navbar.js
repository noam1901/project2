import React from 'react'
import './navbar.css' 

function Navbar() {
  return (
    <div className="navbar">
        <div className="right-nav">
          <ul className="nav-links">
            <li>Shop</li>
            <li>Products</li>
          </ul>
        </div>
        <div>
          <img src='./LOGO.png' className='logo'></img>
        </div>
        <div className='left-nav'>
          <ul className="nav-links">
            <li>Cart</li>
            <li>My Account</li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar