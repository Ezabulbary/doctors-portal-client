import React from 'react';
import Footer from '../Shared/Footer';
import Bannar from './Bannar';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;