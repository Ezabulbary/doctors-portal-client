import React from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableServices = ({ date, services }) => {
    return (
        <div className='my-24'>
            <div className='text-center'>
                <p className='text-primary'>Available Services on {format(date, 'PP')}</p>;
                <p>Please select a service.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableServices;