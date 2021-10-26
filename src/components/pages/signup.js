import React, { useState, useReducer } from 'react';
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
    alert(`Hey ${state.name} you have successfully registered!`);
  }

  function onChange(e) {
    const { name, value, checked } = e.target;
    const action = { name, value, checked };
    dispatch(action);
  }

  return (
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
        <button
          className={!validateButton(state) ? 'disabled' : ''}
          onClick={handleClick}
          disabled={!validateButton(state) } 
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
