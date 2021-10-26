import '../../App.css';
import Navbar  from '../Navbar';
import HeroSection from '../HeroSection';
import React from 'react';
import Cards  from '../Cards';
import Footer from '../Footer';

function homepage() {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default homepage;