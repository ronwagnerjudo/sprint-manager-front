import React from 'react'
import './GoogleLogin.css'

const GoogleLogin = () => {
  return (
    <a href='http://127.0.0.1:5000/login' >
      <button type="button" className="login-with-google-btn" style={{color: "white", backgroundColor: "#683ba4"}} >
        Sign in with Google
      </button>
    </a>
  )
}

export default GoogleLogin