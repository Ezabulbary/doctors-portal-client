import React from 'react';
import Bannar from './Bannar';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
        </div>
    );
};

export default Home;