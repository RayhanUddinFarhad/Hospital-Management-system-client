import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Loader';

const PrivateRoutes = ({children, loader}) => {


    const {user} = useContext (AuthContext)

    const location = useLocation()

    if (loader) {


        return <Loader></Loader>
    }


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