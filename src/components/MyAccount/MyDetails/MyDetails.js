import React from 'react'
import './MyDetails.css'
const MyDetails = () => {
  return (
    <div className='my-details-container'>
        <h1>My Details</h1>
        <div className='my-details-card'>
            <div><h2>First Name:</h2><span>user</span></div>
            <div><h2>Last Name:</h2><span>user</span></div>
            <div><h2>Email:</h2><span>user@user.com</span></div>
            <div><h2>Phone Number:</h2><span>052222222</span></div>
        </div>
    </div>
  )
}

export default MyDetails