import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Profile = () => {



    const {user} = useContext(AuthContext)

    const handleUpdateProfile = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;


        updateProfile (user, {


            displayName : name,
            photoURL  : photo,

        })
        .then (res => {




        })
        .catch (err => {

            console.log (err)
         })






     }




    return (

        <div className='space-y-5'>

<div className='rounded-full'>

    
{


user.photoURL && <img className='w-96 mx-auto' src={user.photoURL}/>
            }



</div>

<h1 className='text-4xl font-bold text-center'>{user.displayName}</h1>
<h1 className='text-4xl font-bold text-center'>{user.email}</h1>
           




        <div className='w-full'>




          
       

        <div className='mx-auto card w-[1140px] shadow-sm bg-base-100 my-20 '>



            <Form onSubmit={handleUpdateProfile}  className='card-body space-y-10'>




                <div className='flex'>





                <input type="text" name='name' defaultValue={user.displayName} placeholder="name" className="input w-full" />
                <input type="text" name='email'  placeholder="Email" defaultValue={user?.email}  disabled className="input w-full" />

                </div>




                <div className='flex'>





                <input name='photo' defaultValue={user.photoURL && user.photoURL}  type="text" placeholder="Photo URL" className="input w-full " />

                

                </div>




                <button className='button-primary'>

                    Order Confirm
                </button>






            </Form>






        </div>
</div>

</div>
    );
};

export default Profile;