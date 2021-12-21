import React from 'react';
import './signin.css';
import { Link } from "react-router-dom";
import { Button } from '../Layouts/Button';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import { useState } from 'react';
import axios from 'axios';
function SignIn () {
  const [signinInput, setsigninInput] = useState({
    username : '',
    password : ''
  })

  function handleInput(e) {
    e.persist()
    setsigninInput({...signinInput, [e.target.name] : e.target.value})
  }

  async function signinSubmit(e) {
    e.preventDefault();
    const data = {
      username : signinInput.username,
      password : signinInput.password
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
      // Login..
      axios.post('/api/login', data).then(res => {
          localStorage.setItem('auth_token',res.data.token)
          localStorage.setItem('user_id',res.data.user_id)
          localStorage.setItem('role',res.data.role)
          window.location.href = '/findwork'
      })
    })      
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
          name="username"
          placeholder="Username"
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
