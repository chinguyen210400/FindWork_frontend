import '../../App.css';
import React from 'react';
import Navbar_findtalent from '../FindTalent/Navbar_findtalent';
import Enterprise_Profile from '../EnterpriseProfile/EnterpriseProfile';
import Footer from '../HomePage/Footer';

function enterpriseprofile() {
    return (
    <>
        <Navbar_findtalent />
        <Enterprise_Profile />
        <Footer />
    </>
    );
}

export default enterpriseprofile;