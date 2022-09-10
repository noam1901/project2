import React, { useEffect, useState } from 'react'
import Api from '../../../DAL/api'
import './MyDetails.css'
const MyDetails = () => {
  const [details, setDetails] = useState([])
  useEffect(()=>{
    async function getData(){
      const cookie = document.cookie.split('=')
      const response = await Api.getUserDetails(cookie[1])
      setDetails(response[0])
    }
    getData()
  },[])
  console.log(details);
  return (
    <div className='my-details-container'>
        <h1>My Details</h1>
        <div className='my-details-card'>
            <div><h2>First Name:</h2><span>{details.firstName}</span></div>
            <div><h2>Last Name:</h2><span>{details.lastName}</span></div>
            <div><h2>Email:</h2><span>{details.email}</span></div>
            <div><h2>Phone Number:</h2><span>{details.phone}</span></div>
        </div>
    </div>
  )
}

export default MyDetails