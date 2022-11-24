import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loder} = useContext(AuthProvider)
    if(loder){
        return <progress className="progress w-56"></progress>;
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;