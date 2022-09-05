import React, { useEffect, useState } from 'react'
import './navbar.css' 
import { Link } from 'react-router-dom';
function Navbar() {
  const [loged, setLoged] = useState(false)
  useEffect(
    ()=>{
      const cookie = document.cookie.split('=')
      if (cookie[1]){
        setLoged(true)
      }
    },[])
  const removeCookie = ()=>{
    document.cookie = 'id=; expires=Thu, 01 Jan 1960 00:00:00 UTC;'
    window.location.href = 'http://localhost:3000'
    
  }
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
            {loged?<><Link to='/cart'>Cart</Link><Link to='/profile'>My Account</Link><Link to='/' onClick={removeCookie}>Log Out</Link></>:<><Link to='/login'>Login</Link><Link to='/register'>Register</Link></>}  
          </ul>
        </div>
      </div>
  )
}

export default Navbar