import React from 'react';
import './signin.css';
import { Link } from "react-router-dom";
import { Button } from '../Layouts/Button';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import { useState } from 'react';

function SignIn () {
  const [signinInput, setsigninInput] = useState({
    login : '',
    password : ''
  })

  function handleInput(e) {
    e.persist()
    setsigninInput({...signinInput, [e.target.name] : e.target.value})
  }

  async function signinSubmit(e) {
    e.preventDefault();

    let item = signinInput;
    console.log(item);

    let result = await fetch('http://localhost:8000/api/validate_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    let data = await result.json();
    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data.user));
      if (data.user.role === 'admin') {
        window.location.href = '/findtalent';
      } else {
        window.location.href = '/findwork';
      }
    } else {
      alert(data.message);
    }
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="wrapper">
      <h2 className="registerTitle">Sign In</h2>
      <form className="registerForm" onSubmit={signinSubmit}>
        <input
          className="textInput"
          type="text"
          name="login"
          placeholder="Email/Username"
          onChange={handleInput}
        />

        <input
          className="textInput"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}

        />

        <Button buttonStyle='btn--outline' buttonSize='btn--max' type="submit">
            Continue
        </Button>
      </form>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default SignIn;
