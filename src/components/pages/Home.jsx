import React from 'react';
import HomeBanner from '../Header/shared/HomeBanner';
import Doctors from '../Header/shared/Doctors';

const Home = () => {
    return (
        <div className='space-y-10'>
            <HomeBanner></HomeBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;