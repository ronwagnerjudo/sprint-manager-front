import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = (props) => {
    const isLogin = Cookies.get("jwt")
    return (
        isLogin ?
          props.children
        : <Navigate to="/login" />
    );
};

export default PrivateRoute;