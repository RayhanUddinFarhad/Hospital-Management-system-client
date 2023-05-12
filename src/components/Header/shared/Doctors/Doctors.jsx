import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {

    const [doctor, setdoctor] = useState  ([])



    useEffect(() => { 

        fetch ('http://localhost:4000/doctors')
        .then (response => response.json())
        .then (data => setdoctor(data))
    }, [])








    return (
        <div>
             <div className='text-center border-b-4 w-52 mx-auto border-cyan-700 my-5'>


<h1 className='text-3xl font-bold '>Our <span>Doctors</span></h1>


</div>


<div className='grid lg:grid-cols-3 gap-10'>

    {


doctor?.map(doctor => <Doctor key={doctor._id} data = {doctor}></Doctor>)
    }



   
</div>
        </div>
    );
};

export default Doctors;