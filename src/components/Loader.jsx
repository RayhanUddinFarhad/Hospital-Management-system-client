import React from 'react';
import Lottie from "lottie-react";
import loader from '../assets/animation/loader.json'
const Loader = () => {



    return (
        <div>
            <Lottie animationData={loader} />;
        </div>
    );
};

export default Loader;