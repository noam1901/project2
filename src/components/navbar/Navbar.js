import React, { useEffect, useState } from 'react'
import './navbar.css' 
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
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
        <div className='left-nav'>
        <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {loged?<><Dropdown.Item as={Link} to="/cart">Cart</Dropdown.Item>
        <Dropdown.Item as={Link} to="/profile">My Account</Dropdown.Item>
        <Dropdown.Item as={Link} to="/" onClick={removeCookie}>Log Out</Dropdown.Item></>:<><Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item><Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item></>}
      </Dropdown.Menu>
    </Dropdown>
        
            
            
          
        </div>
      </div>
  )
}

export default Navbar