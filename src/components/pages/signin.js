import React from 'react';
import './signin.css';
import { Link } from "react-router-dom";
import { Button } from '../Layouts/Button';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';

const initialState = {
  email: '',
  password: '',
};
function signin () {

  return (
    <>
    <Navbar></Navbar>
    <div className="wrapper">
      <h2 className="registerTitle">Sign In</h2>
      <form className="registerForm">
        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
        />

    <Link to = '/findwork' >
        <Button buttonStyle='btn--outline' buttonSize='btn--max'>
            Continue
        </Button>
    </Link>
      </form>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default signin;
