import '../../App.css';
import React from 'react';
import Navbar_findtalent from '../FindTalent/Navbar_findtalent';
import Security_enterprise from '../Security_enterprise/Security_enterprise';
import Footer from '../HomePage/Footer';

function security_enterprise() {
    return(
        <>
            <Navbar_findtalent />
            <Security_enterprise />
            <Footer />
        </>
    );
}

export default security_enterprise;