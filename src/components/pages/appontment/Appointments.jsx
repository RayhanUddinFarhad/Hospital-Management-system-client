import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Appointments = () => {

    const {user} = useContext(AuthContext)


    const [appointment, setAppointments] = useState([])

    const url = `http://localhost:4000/appointments?email=${user.email}`


    fetch (url)
    .then (res => res.json())
    .then (data => setAppointments(data))


    return (
        <div>
            


            <h1> Your Total appointment : {appointment.length}</h1>
        </div>
    );
};

export default Appointments;