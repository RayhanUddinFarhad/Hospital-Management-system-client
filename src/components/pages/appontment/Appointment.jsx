import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Appointment = ({data, setappointment}) => {





    const handleDelete = (_id) => {




        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {



                fetch (`http://localhost:4000/appointments/${_id}`, {
                    method :  'DELETE',
                })
                .then (rse => rse.json())
                .then (data =>{ setappointment  (data)
                
                
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )})




            }
          })

       





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