import '../../App.css';
import React, { useState, useContext, createContext } from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Footer from '../HomePage/Footer';
import Cards_findjob_recent from '../FindJob/Cards_findjob_recent';

function FindJobRecent() {
    console.log("hello");
    return(
        <>
            <Navbar_myjobs />
            <Cards_findjob_recent/>
            <Footer />
        </>
    );
}

export default FindJobRecent;