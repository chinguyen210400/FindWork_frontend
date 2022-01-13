import '../../App.css';
import React from 'react';
import Navbar_findtalent from '../FindTalent/Navbar_findtalent';
import Footer from '../HomePage/Footer';
import UpgradeAccountEnterprise from '../UpgradeAccountEnterprise/UpgradeAccountEnterprise';

function security_enterprise() {
    return(
        <>
            <Navbar_findtalent />
            <UpgradeAccountEnterprise />
            <Footer />
        </>
    );
}

export default security_enterprise;