import React, { useEffect, useState } from 'react';
import Slot from './Slot';
import BookingModal from './BookingModal';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableSlots = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    // const [services, setServices] = useState([]);

    const formattedDate = format(date, 'PP');
    const { data: available, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate]);

    return (
        <div className='my-24'>
            <div className='text-center my-20'>
                <p className='text-primary'>Available slots for Teeth Orthodontics.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    available?.map(service => <Slot
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
                    refetch={refetch}
                ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableSlots;