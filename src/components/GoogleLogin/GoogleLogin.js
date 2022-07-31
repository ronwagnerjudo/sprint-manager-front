import React from 'react'
import './GoogleLogin.css'

const GoogleLogin = () => {
  const loginghref = `http://localhost/api/user-api/login`
  return (
    <a href={loginghref} >
      <button type="button" className="login-with-google-btn" style={{color: "white", backgroundColor: "#683ba4"}} >
        Sign in with Google
      </button>
    </a>
  )
}

export default GoogleLogin