import React, { useState } from 'react';
import Slot from './Slot';
import BookingModal from './BookingModal';

const AvailableSlots = ({ date, services }) => {
    const [treatment, setTreatment] = useState(null);
    return (
        <div className='my-24'>
            <div className='text-center my-20'>
                <p className='text-primary'>Available slots for Teeth Orthodontics.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Slot
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Slot>)
                }
            </div>
            <div>
                {treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableSlots;