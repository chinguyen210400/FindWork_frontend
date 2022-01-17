import '../../App.css';
import React from 'react';
import Navbar_admin  from '../Admin/Navbar_admin';
import Employee_list from '../Admin/Employee_list';
import Footer from '../HomePage/Footer';

function admin_employee () {
    return (
        <>
        <Navbar_admin />
        <Employee_list />
        <Footer />
        </>
    );
}

export default admin_employee;