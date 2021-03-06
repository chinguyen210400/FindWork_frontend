import '../../App.css';
import Navbar  from '../HomePage/Navbar';
import HeroSection from '../HomePage/HeroSection';
import React from 'react';
import Cards  from '../HomePage/Cards';
import Footer from '../HomePage/Footer';

function HomePage() {
    return(
        <>
            <Navbar />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default HomePage;