import React from 'react';
import doctor from '../../../assets/Person/doctor.png'

const HomeBanner = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src= {doctor} className="max-w-lg" />
    <div>
      <h1 className="text-5xl font-bold">Healing<span className='text-cyan-700'>Hands</span> Hospital - Caring for Your Health</h1>
      <p className="py-6"> Welcome to Healing Hands Hospital, where we believe in providing the highest quality care to our patients. Our state-of-the-art facility and experienced medical staff are here to help you on your path to recovery. Whether you're seeking treatment for an illness or injury, or just need routine medical care, our team of compassionate professionals is dedicated to providing personalized and effective healthcare services. We understand that your health is precious, and we are committed to providing the best possible care to help you get back to your life. Thank you for choosing Healing Hands Hospital - your partner in good health.</p>
      <button className="button-primary">Appointment</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeBanner;