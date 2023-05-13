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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    
  </React.StrictMode>,
)
