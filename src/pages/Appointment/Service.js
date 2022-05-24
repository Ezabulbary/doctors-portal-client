import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <Link to='/appointment' className="card-title">{service.name}</Link>
            </div>
        </div>
    );
};

export default Service;