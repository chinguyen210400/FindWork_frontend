import '../../App.css';
import React, { useState, useContext, createContext } from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Footer from '../HomePage/Footer';
import Cards_findjob from '../FindJob/Cards_findjob';

function FindJob() {

    return(
        <>
            <Navbar_myjobs />
            <Cards_findjob/>
            <Footer />
        </>
    );
}

export default FindJob;