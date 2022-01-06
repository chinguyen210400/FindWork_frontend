import '../../App.css';
import React from 'react';
import Navbar_invitedjobs  from '../InvitedJobs/Navbar_invitedjobs';
import Footer from '../HomePage/Footer';
import Cards_invitedjobs  from '../InvitedJobs/Cards_invitedjobs';

function invitedjobs() {
    return(
        <>
            <Navbar_invitedjobs />
            <Cards_invitedjobs />
            <Footer />
        </>
    );
}

export default invitedjobs;