import React from 'react';
import { FaHeart, FaStar } from "react-icons/fa";
import { FcLike, FcRating } from "react-icons/fc";



const Doctor = ({data}) => {
    return (
        <div>
            <div className="card  shadow h-full">
  <figure className='relative'><img  src= {data.image} alt="Shoes" />
  <FcLike className='absolute top-10 text-2xl bg-gray-200 px-1 rounded-lg text-red-500 right-5'></FcLike>



  
  
  
  
  
  </figure>
  <div className=" space-y-2 my-2 p-3">
    <h2 className="card-title">
      {data.name}
    </h2>
    <p className='font-semibold'>{data.specialist}</p>
    <p className='font-semibold'> Visit :  ${data.visitingPrice}</p>
    <p className='flex items-center '> <FaStar className='text-yellow-500 mr-2'/> 4.5</p>

    <div className="card-actions justify-end">
      <button className='button-primary'>Appoint Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Doctor;