import React from 'react';
import chair from '../../assets/images/chair.png';
import bannarBg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Bannar = () => {
    return (
        <div style={{
            background: `url(${bannarBg})`
        }} className="hero md:min-h-screen px-12 pb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div className='md:p-10'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Bannar;