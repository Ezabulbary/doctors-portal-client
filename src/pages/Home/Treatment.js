import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className="hero md:min-h-screen pb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='md:p-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <img src={treatment} className="lg:max-w-xl rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Treatment;