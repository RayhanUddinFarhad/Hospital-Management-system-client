import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FcBusinessman } from 'react-icons/fc';

import avatar from '../../assets/user.png'
const Navbar = () => {




  const {user, logOut} = useContext(AuthContext)
  console.log (user)


  const handleLogOut = () => {





    logOut ();
    
   }
  
  console.log (user)
    return (
        <div>

<div className="navbar bg-base-100 my-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
       
        <li><a>Item 3</a></li>


        
        <div >
  </div>
        
      </ul>


      
    </div>
    <h1 className="btn btn-ghost normal-case text-2xl "> Healing <span className='text-2xl font-extrabold text-cyan-600'> Hands</span>  </h1>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-xl space-x-10">
      <Link to = "/">Home</Link>
      <Link>About</Link>
      <Link>Contract</Link>

      {

        user && <Link to = "/yourAppoint">Your Appoinment</Link>
      }

    </ul>


    


   
  </div>

  <div className="navbar-end ">


 {

  user &&  <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
    <div className="w-10 rounded-full">
     {

      user.photoURL ? <img src={user.photoURL}></img> :   <img src= {avatar} alt="" />
     }
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

    <p>Hi, {user.displayName}</p>
    <li>
      <Link to= "/profile" className="justify-between">
        Profile
      </Link>
    </li>
    <li onClick={handleLogOut}><a>Logout</a></li>
  </ul>
</div>
 }





    {/* {


user ? <> <button onClick={handleLogOut} className='button-primary'>Log Out</button> <p>{user?.displayName}</p> </> 
 : <Link to= "/logIn" className='button-primary'>Log In</Link>
    } */}
  </div>
  
</div>
            
        </div>
    );
};

export default Navbar;