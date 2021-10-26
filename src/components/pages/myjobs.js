import '../../App.css';
import React from 'react';
import Navbar_myjobs  from '../Navbar_myjobs';
import Footer from '../Footer';
import Cards_myjobs  from '../Cards_myjobs';

function myjobs() {
    return(
        <>
            <Navbar_myjobs />
            <Cards_myjobs />
            <Footer />
        </>
    );
}

export default myjobs;