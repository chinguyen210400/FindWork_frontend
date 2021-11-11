import '../../App.css';
import React from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import UserProfile from '../UserProfile/UserProfile';
import Footer from '../HomePage/Footer';

function changeprofile() {
    return(
        <>
            <Navbar_myjobs />
            <UserProfile />
            <Footer />
        </>
    );
}

export default changeprofile;