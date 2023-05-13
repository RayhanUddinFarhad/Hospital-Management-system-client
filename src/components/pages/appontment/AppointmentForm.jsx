import React, { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const AppointmentForm = () => {

    const data = useLoaderData()

    console.log (data)
    const {user} = useContext (AuthContext)




    const handleAppointment = (e) => {
        e.preventDefault();
      
        const form = e.target;
      
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
      
        const patientDetails = {
          name,
          email,
          phone,
          date,
        };
      
       
        fetch (`http://localhost:4000/appointments`, {

        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientDetails)



        })
        .then (res => res.json())
        .then (data => console.log (data))




    }

    return (
        <div className='w-full'>
       

           <div className='mx-auto card w-[1140px] shadow-sm bg-base-100 my-20 '>



               <Form onSubmit={handleAppointment}  className='card-body space-y-10'>




                   <div className='flex'>





                   <input type="text" name='name' placeholder="Patient name" className="input w-full" />
                   <input type="text" name='email' placeholder="Email" defaultValue={user?.email}  disabled className="input w-full" />

                   </div>




                   <div className='flex'>





                   <input name='phone' type="text" placeholder="Phone no" className="input w-full " />
                   <input name='date' type="date" placeholder="Date" className="input w-full " />

                   </div>

                   <h1 className='font-bold text-3xl'>Price : ${data?.visitingPrice} </h1>


                   <button className='button-primary'>

                       Order Confirm
                   </button>






               </Form>






           </div>
   </div>
    );
};

export default AppointmentForm;