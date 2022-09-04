import React, { useEffect, useState } from 'react'
import './navbar.css' 
import { Link } from 'react-router-dom';
function Navbar() {
  const [loged, setLoged] = useState(true)
  useEffect(
    ()=>{
      if (document.cookie){
        setLoged(true)
      }
    },[])
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
            {loged?<><Link to='/cart'>Cart</Link><Link to='/profile'>My Account</Link></>:<><Link to='/login'>Login</Link><Link to='/register'>Register</Link></>}  
          </ul>
        </div>
      </div>
  )
}

export default Navbar