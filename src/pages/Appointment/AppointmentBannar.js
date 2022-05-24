import React from 'react';
import chair from '../../assets/images/chair.png';
import bannarBg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBannar = ({ date, setDate}) => {
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
                    
                </div>
            </div>
        </div>
    );
};

export default AppointmentBannar;