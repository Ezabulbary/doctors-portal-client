import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableServices = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`, {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    
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