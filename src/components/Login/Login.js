import React from 'react'
import Form from '../Form/Form'
import './Login.css'
import {FaMailBulk, FaPaperclip} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Api from '../../DAL/api'
const Login = () => {
    const formInputs = {
        email: {
            id: 1,
            name: 'email',
            label: 'Email',
            placeholder: 'Please enter your email',
            value: '',
            type: 'text',
            validations: {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            },
            errors: [],
            icon: FaMailBulk,
        },
        password: {
            id: 2,
            name: 'password',
            label: 'Password',
            placeholder: "Please enter your password",
            value: '',
            type: 'password',
            validations: {
                required: true
            },
            errors: [],
            icon: FaPaperclip,
        }
    }
  return (
    <div className='login-page-container'>
        <Form formInputs={formInputs} 
        title="Login" 
        onSubmit="Login" 
        req={Api.loginPost} 
        error="email or password in valid"
        onSuccess={()=>{window.location.href = 'http://localhost:3000/'}}></Form>
        <div>
          <br></br>
          <span>dont have a user?</span><br></br>
          <Link to='/register'>Register here</Link>
        </div>
    </div>
  )
}

export default Login
