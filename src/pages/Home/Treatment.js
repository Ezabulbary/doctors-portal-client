import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero md:min-h-screen mb-32 px-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='md:p-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <img src={treatment} className="lg:max-w-xl rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Treatment;