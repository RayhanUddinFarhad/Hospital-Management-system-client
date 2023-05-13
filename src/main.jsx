import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home.jsx';
import LogIn from './components/pages/LogIn.jsx';
import Register from './components/pages/Register.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import AppointmentForm from './components/pages/appontment/AppointmentForm.jsx';
import Appointments from './components/pages/appontment/Appointments.jsx';
import PrivateRoutes from './components/routes/PrivateRoutes.jsx';
import Update from './components/pages/appontment/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [

      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },

      {

        path: "/register",
        element: <Register></Register>
      },

      {

        path :"/appoint/:id",
        element : <PrivateRoutes><AppointmentForm></AppointmentForm></PrivateRoutes>,
        loader  : ({params}) => fetch (`http://localhost:4000/doctors/${params.id}`)
      },

      {

        path : "/yourAppoint",
        element : <Appointments></Appointments>,
        // loader : () => fetch (`http://localhost:4000/appointments`)
      },
      {
        path : "/update/:id",

        element  : <Update></Update>,
        loader : ({params}) => fetch (`http://localhost:4000/appointments/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    
  </React.StrictMode>,
)
