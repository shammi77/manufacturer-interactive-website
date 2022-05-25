import React from 'react';
import Banner from './Banner';
import Summary from './Summary';
import Reviews from './Reviews';
import Footer from '../../components/Footer';
import AvailableParts from '../../pages/Home/Parts/AvailableParts'


const Home = () => {
    return (
        <div>
            <Banner/>
            <AvailableParts/>
            <Summary/>
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;