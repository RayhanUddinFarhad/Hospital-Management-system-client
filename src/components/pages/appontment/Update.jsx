import React, { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {

    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    console.log(data)

    const handleAppointmentUpdate = (e) => { 

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
          doctorName : data.name
        };


        fetch (`http://localhost:4000/appointments/${data._id}` , {


        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientDetails)



        })
        .then (res => res.json())
        .then (data => {console.log (data)
        
            Swal.fire(
                'Good job!',
                'Appointment updated successfully',
                'success'
              )

        
        
        })





        




    }
    return (
        <div className='w-full'>
       

        <div className='mx-auto card w-[1140px] shadow-sm bg-base-100 my-20 '>



            <Form onSubmit={handleAppointmentUpdate}  className='card-body space-y-10'>




                <div className='flex'>





                <input type="text" name='name' defaultValue={data.name} placeholder="Patient name" className="input w-full" />
                <input type="text" name='email'  placeholder="Email" defaultValue={user?.email}  disabled className="input w-full" />

                </div>




                <div className='flex'>





                <input name='phone' defaultValue={data.phone} type="text" placeholder="Phone no" className="input w-full " />
                <input name='date' defaultValue={data.date} type="date" placeholder="Date" className="input w-full " />

                </div>




                <button className='button-primary'>

                    Order Confirm
                </button>






            </Form>






        </div>
</div>
    );
};

export default Update;