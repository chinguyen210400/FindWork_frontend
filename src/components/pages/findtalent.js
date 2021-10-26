import '../../App.css';
import React from 'react';
import Navbar_findtalent  from '../Navbar_findtalent';
import Cards_findtalent  from '../Cards_findtalent';
import Footer from '../Footer';

function findtalent () {
    return (
        <>
        <Navbar_findtalent />
        <Cards_findtalent />
        <Footer />
        </>
    );
}

export default findtalent;