import React from 'react'
import axios from 'axios'
import './Login.css'

const Login = () => {
  return (
    <a href='https://127.0.0.1:5000/login' >
      <button type="button" className="login-with-google-btn" >
        Sign in with Google
      </button>
    </a>
  )
}

export default Login