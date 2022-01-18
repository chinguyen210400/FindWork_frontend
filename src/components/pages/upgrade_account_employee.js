import '../../App.css';
import React from 'react';
import Navbar_findtalent from '../FindTalent/Navbar_findtalent';
import Footer from '../HomePage/Footer';
import UpgradeAccountEmployee from '../UpgradeAccountEmployee/UpgradeAccountEmployee';

function upgradeaccount_employee() {
    return(
        <>
            <Navbar_findtalent />
            <UpgradeAccountEmployee />
            <Footer />
        </>
    );
}

export default upgradeaccount_employee;