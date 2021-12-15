import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import { Button } from '../Layouts/Button';
import './signin.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: '',
  termsAccepted: false
};

function reducer(state, action) {
  if (action.name === 'termsAccepted') {
    return { ...state, termsAccepted: action.checked };
  } else {
    return { ...state, [action.name]: action.value };
  }
}

function validate(state) {
  return state.password === state.passwordRepeat ;
}

function validateButton(state) {
  return state.password === state.passwordRepeat && state.termsAccepted ;
}

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleClick(e) {
    e.preventDefault();
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    const action = { name, value, checked };
    dispatch(action);
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="wrapper">
      <h2 className="registerTitle">Sign Up</h2>
      <form className="registerForm">
        <input
          className="textInput"
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />

        <input
          className="textInput"
          type="password"
          name="passwordRepeat"
          placeholder="Password repeat"
          onChange={onChange}
        />

        <div className = 'signup_role'>
            <p> I want to :  </p>
            <div>
              <Button buttonStyle='btn--signup' buttonSize='btn--mini' onClick={handleClick}>Hire for a project</Button>
              <Button buttonStyle='btn--signup' buttonSize='btn--mini' onClick={handleClick}>Work as a freelancer</Button>
        </div>
        </div>

        <label className="touCheckboxLabel">
          <input
            className="touCheckbox"
            type="checkbox"
            name="termsAccepted"
            onChange={onChange}
          />
          Accept Terms of Use!
        </label>
        <p className={!validate(state) ? 'errorMessage' : 'invisible'}>
          The first password dosen't match the second password so please check that!
        </p>
      <Link to='/'>
        <Button buttonStyle='btn--outline' buttonSize='btn--max'
          className={!validateButton(state) ? 'disabled' : ''}
          disabled={!validateButton(state) } 
        >
          Create My Account
        </Button>
      </Link>
      </form>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default Register;
