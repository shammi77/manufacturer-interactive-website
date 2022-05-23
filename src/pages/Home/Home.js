import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary';
import Reviews from './Reviews';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Summary/>
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;