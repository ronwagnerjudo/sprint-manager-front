import React from 'react'
import { Navigate, Route } from 'react-router-dom'

export const PrivateRoute = ({ children}, isAuthenticated=false) => {
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/" />
}

export default PrivateRoute