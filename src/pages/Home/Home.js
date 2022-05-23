import React from 'react';
import Bannar from './Bannar';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;