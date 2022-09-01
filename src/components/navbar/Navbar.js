import React from 'react'
import './navbar.css' 
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
        <div className="right-nav">
          <ul className="nav-links">
            <Link to='/'>Shop</Link>
            <Link to='/products'>Products</Link>
          </ul>
        </div>
        <div>
          <img src='./LOGO.png' className='logo'></img>
        </div>
        <div className='left-nav'>
          <ul className="nav-links">
            <Link to='/cart'>Cart</Link>
            <Link to='/profile'>My Account</Link>
          </ul>
        </div>
      </div>
  )
}

export default Navbar