import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {


    const {user} = useContext (AuthContext)

    const location = useLocation()


    if (user) {

        return children
    }

    return <Navigate state={{from : location}} to = "/logIn" replace></Navigate>







    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;