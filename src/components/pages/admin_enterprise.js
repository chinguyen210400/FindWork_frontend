import '../../App.css';
import React from 'react';
import Navbar_admin  from '../Admin/Navbar_admin';
import Enterprise_list from '../Admin/Enterprise_list';
import Footer from '../HomePage/Footer';

function admin_enterprise () {
    return (
        <>
        <Navbar_admin />
        <Enterprise_list />
        <Footer />
        </>
    );
}

export default admin_enterprise;