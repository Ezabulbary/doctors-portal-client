import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import bannarBg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBannar = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div style={{
            background: `url(${bannarBg})`
        }} className="hero md:min-h-screen px-12 pb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div className='md:p-10'>
                    <DayPicker 
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />;
                    <p>You picked {format(date, 'PP')}.</p>;
                </div>
            </div>
        </div>
    );
};

export default AppointmentBannar;