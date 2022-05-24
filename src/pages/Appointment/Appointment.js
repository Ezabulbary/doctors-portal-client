import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBannar from './AppointmentBannar';
import AvailableServices from './AvailableServices';
import AvailableSlots from './AvailableSlots';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <AppointmentBannar date={date} setDate={setDate}></AppointmentBannar>
            <AvailableServices date={date} services={services}></AvailableServices>
            <AvailableSlots date={date} services={services}></AvailableSlots>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;