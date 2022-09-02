import React from 'react'
import './Address.css'
const Address = () => {
  return (
    <div className='address-container'>
        <h1>My Address</h1>
        <div className='address-card'>
            <div><h2>City:</h2><span>Ashkelon</span></div>
            <div><h2>Country:</h2><span>Israel</span></div>
            <div><h2>Address:</h2><span>emek hefer 25</span></div>
            <div><h2>PostalCode:</h2><span>052222222</span></div>
        </div>
    </div>
  )
}

export default Address