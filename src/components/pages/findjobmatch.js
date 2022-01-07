import '../../App.css';
import React, { useState, useContext, createContext } from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Footer from '../HomePage/Footer';
import Cards_findjob_match from '../FindJob/Cards_findjob_match';

function FindJobMatch() {
    console.log("hello");
    return(
        <>
            <Navbar_myjobs />
            <Cards_findjob_match/>
            <Footer />
        </>
    );
}

export default FindJobMatch;