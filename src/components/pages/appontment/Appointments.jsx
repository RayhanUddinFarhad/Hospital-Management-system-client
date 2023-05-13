import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Appointment from './Appointment';
import Loader from '../../Loader';

const Appointments = () => {

    const {user} = useContext(AuthContext)
    const [loader, setLoader] = useState (false)




    const [appointment, setAppointments] = useState([])

    const url = `http://localhost:4000/appointments?email=${user.email}`



    useEffect(() => {
        setLoader(true);
        const url = `http://localhost:4000/appointments?email=${user.email}`;
        fetch (url)
        .then (res => res.json())
        .then (data => {
            setLoader(false);
            setAppointments(data)
        });
    }, [user.email]);




    

    return (
        <div>
            


            <h1> Your Total appointment : {appointment.length}</h1>



            <div>

                



            <div className="overflow-x-auto">
  <table className="table w-full table-normal">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Doctor name</th>

        <th> Patient Name</th>
        <th>email</th>
        <th>Phone</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {/* row 2 */}


      {

        loader && <Loader></Loader>
      }

      {

        appointment && appointment.map (data => <Appointment key = {appointment._id} data = {data} setappointment  = {setAppointments}></Appointment>)
      }





    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Appointments;