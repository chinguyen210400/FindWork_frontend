import '../../App.css';
import React from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Security_employ from '../Security_employ/Security_Employ';
import Footer from '../HomePage/Footer';

function security_employ() {
    return(
        <>
            <Navbar_myjobs />
            <Security_employ />
            <Footer />
        </>
    );
}

export default security_employ;