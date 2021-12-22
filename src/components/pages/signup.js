import axios from 'axios';
import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import { Button } from '../Layouts/Button';
import './signin.css';
const Register = () => {
  const [registerInput, setRegisterInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role : '',
    termsAccepted: false
  })

  function validate() {
    return registerInput.password === registerInput.confirmPassword
  }
  
  function validateButton() {
    return validate() && registerInput.termsAccepted ;
  }
  function registerSubmit(e) {
    e.preventDefault();
    const data = {
      username: registerInput.username,
      password: registerInput.password,
      password_confirmation : registerInput.confirmPassword,
      role: registerInput.role
    }
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/register`,data).then(res => {      
        if (res.status === 201){
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('user_id', res.data.user_id)
          localStorage.setItem('role', res.data.role)

          console.log(res);
          if (registerInput.role === 'employee')
            window.location.href = '/findwork'
            if (registerInput.role === 'enterprise')
            window.location.href = '/findtalent'

        } 
    })
    .catch(error => {
        let errorObj = error.response.data.errors
        let errorMessage = errorObj[Object.keys(errorObj)[0]]
        alert(errorMessage[0])
        // alert(error.data);
    })
  })
   
    
    // let item = registerInput
    // let result = await fetch('http://localhost:8000/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(item)
    // })

    // let data = await result.json()
    // console.log(data.message);
    // if (data.success){
    //   localStorage.setItem('user',JSON.stringify(data.user))
    //   window.location.href = '/signin'
    // }
    // else {
    //   alert(data.message)
    // }
    
  }

  function handleInput(e) {
    e.persist()
    setRegisterInput({...registerInput, [e.target.name] : e.target.value})
  }

  function handleCheckBox() {
    setRegisterInput({...registerInput, termsAccepted : !registerInput.termsAccepted})
  } 

  const handleClick = btnType => e => {
      e.preventDefault()
      setRegisterInput({...registerInput, role: btnType})

  }
  return (
    <>
    <Navbar></Navbar>
    <div className="wrapper">
      <h2 className="registerTitle">Sign Up</h2>
      <form className="registerForm" onSubmit= {registerSubmit} >

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

        <input
          className="textInput"
          type="password"
          name="confirmPassword"
          placeholder="Password repeat"
          onChange={handleInput}
        />

        <div className = 'signup_role'>
            <p> I want to :  </p>
            <div>
              <Button buttonStyle='btn--signup' buttonSize='btn--mini' name = "enterprise" onClick={handleClick("enterprise")}>Hire for a project</Button>
              <Button buttonStyle='btn--signup' buttonSize='btn--mini' name = "employee" onClick={handleClick("employee")}>Work as a freelancer</Button>
        </div>
        </div>

        <label className="touCheckboxLabel">
          <input
            className="touCheckbox"
            type="checkbox"
            name="termsAccepted"
            onClick={handleCheckBox}
          />
          Accept Terms of Use!
        </label>
        <p className={!validate() ? 'errorMessage' : 'invisible'}>
          The first password dosen't match the second password so please check that!
        </p>
        <Button buttonStyle='btn--outline' buttonSize='btn--max'
          className={!validateButton() ? 'disabled' : ''}
           type="submit"
        >
          Create My Account
        </Button>
      
      </form>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default Register;
