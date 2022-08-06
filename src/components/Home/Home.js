import React from 'react';

import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Navbar';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;


 