import React from 'react'
import './ChangePassword.css'
const ChangePassword = () => {
  return (
    <div className='password-container'>
        <h1>Change Password</h1>
        <div className='password-card'>
            <div><h2>New password:</h2><input type='password'></input></div>
            <div><h2>Confirm password</h2><input type='password'></input></div>
        </div>
        <button>Submit Changes</button>
    </div>
  )
}

export default ChangePassword