import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

  const {signUp} = useContext (AuthContext)







  const handleRegister = (e) => {

    e.preventDefault()


    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;


    signUp (email, password)
    .then (res => {

      const registered = res.user

      updateProfile (registered, {
        displayName : name,



      })
    })
    .catch (err => { 


      console.log (err)
    });






  }
    return (
        <div>



<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Form onSubmit={handleRegister} className="card-body">


      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <button className="button-primary">Login</button>
        </div>
        <p> Already have an account? <Link to = "/logIn"  className='btn-link'> Log In</Link></p>
      </Form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;