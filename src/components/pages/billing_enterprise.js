import '../../App.css';
import React from 'react';
import Navbar_findtalent from '../FindTalent/Navbar_findtalent';
import Billing_enterprise from '../Billing_enterprise/Billing_enterprise';
import Footer from '../HomePage/Footer';

function billing_enterprise() {
    return (
    <>
        <Navbar_findtalent />
        <Billing_enterprise />
        <Footer />
    </>
    );
}

export default billing_enterprise;