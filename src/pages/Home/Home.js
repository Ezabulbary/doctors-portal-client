import React from 'react';
import Bannar from './Bannar';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;