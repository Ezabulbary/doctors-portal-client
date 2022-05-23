import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}>
            <div className='text-center py-24'>
                <h3 className='text-primary  text-xl font-bold uppercase pb-5'>Contact Us</h3>
                <h2 className='text-4xl text-white pb-5'>Stay connected with us</h2>
                <input type="text" placeholder="Email Address" class="input w-full max-w-xs m-4" />
                <br />
                <input type="text" placeholder="Subject" class="input w-full max-w-xs m-4" />
                <br />
                <textarea class="textarea w-full max-w-xs m-4" placeholder="Your message"></textarea>
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default Contact;