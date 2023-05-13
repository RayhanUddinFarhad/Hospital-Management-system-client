import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = ({data}) => {





    const handleDelete = (_id) => {

        fetch (`http://localhost:4000/appointments/${_id}`, {
            method :  'DELETE',
        })
        .then (rse => rse.json())
        .then (data => console.log  (data))





     }

    return (
        <tr>
        <th ><button onClick={() => handleDelete (data._id)} className='btn btn-error text-white'>Cancel</button></th>
        <th ><Link to= {`/update/${data._id}`} className='button-primary'>Update</Link></th>

        
        <td>{data.doctorName}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.date}</td>
        </tr>
    );
};

export default Appointment;