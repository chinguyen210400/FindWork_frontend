import '../../App.css';
import React from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Billing_employ from '../Billing_employ/Billing_employ';
import Footer from '../HomePage/Footer';

function billing_employ() {
    return(
        <>
            <Navbar_myjobs />
            <Billing_employ />
            <Footer />
        </>
    );
}

export default billing_employ;