import '../../App.css';
import React from 'react';
import Navbar_admin  from '../Admin/Navbar_admin';
import Report from '../Admin/Report';
import Footer from '../HomePage/Footer';

function admin_report () {
    return (
        <>
        <Navbar_admin />
        <Report />
        <Footer />
        </>
    );
}

export default admin_report;