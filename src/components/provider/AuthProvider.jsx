import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';



const auth = getAuth(app)

export const AuthContext = createContext(null)





const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(false)




    const signUp = (email, password) => {
        setLoader (true)



        return createUserWithEmailAndPassword (auth, email, password)
     }



     const signIn = (email, password) => {
        setLoader (true)



        return signInWithEmailAndPassword (auth, email, password)
      }


      const logOut = () => { 
        setLoader (true)


        return signOut(auth)
      }

     useEffect (() => {

        const unsubscribe = onAuthStateChanged  (auth, currentUser => {

            setUser (currentUser)
            setLoader (false)


        })


        return ( () => unsubscribe)

     }, [])






    const authInfo = {



        user,
        signUp,
        signIn,
        logOut,
        loader
    }








    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;