import React from 'react'
import './UpdateName.css'
const UpdateDetails = () => {
  return (
    <div className='update-name-container'>
    <h1>Update Name</h1>
    <div className='update-name-card'>
        <div><h2>First Name:</h2><input></input></div>
        <div><h2>Last Name:</h2><input></input></div>
    </div>
    <button>Submit Changes</button>
</div>
  )
}

export default UpdateDetails