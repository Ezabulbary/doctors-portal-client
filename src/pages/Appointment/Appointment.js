import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBannar from './AppointmentBannar';
import AvailableServices from './AvailableServices';
import AvailableSlots from './AvailableSlots';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBannar date={date} setDate={setDate}></AppointmentBannar>
            <AvailableServices date={date}></AvailableServices>
            <AvailableSlots date={date}></AvailableSlots>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;