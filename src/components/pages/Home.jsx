import React from 'react';
import HomeBanner from '../Header/shared/HomeBanner';
import Doctors from '../Header/shared/Doctors/Doctors';

const Home = () => {
    return (
        <div className='space-y-10 px-5'>
            <HomeBanner></HomeBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;