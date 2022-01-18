import React, { useState } from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import axios from "axios";

function Billing_enterprise () {
    const [billingInfo, setbillingInfo] = useState({})
    const token = localStorage.getItem('auth_token')

    const handleInput = e => {
        e.persist()
        setbillingInfo({...billingInfo, [e.target.name]: e.target.value})
    }
    
    const submitBillingInfo = e => {
        e.preventDefault()
        axios.post(`/api/bank_account`, billingInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            alert("Add bank account success")
        }).catch(err => {
            alert("Fail")
        })
        // window.location.reload()
    }

    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Link to='/enterpriseprofile'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-user" aria-hidden="true"></i>Enterprise Profile</Button></Link>
                        <Link to='/security_enterprise'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i class="fa fa-lock" aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_enterprise'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
                        <Link to='/upgradeaccount_enterprise'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Upgrade Account</Button></Link>
                        <Link to='/'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-sign-out" aria-hidden="true"></i>Log out</Button></Link>
                    </ul>
                </div>
            </div>
            <div className='billing'>
                <div className='billing_title'>
                   <h1>Billing & Payment</h1> 
                </div>
                <div className='billing_info'>
                    <div className='billing_method'>
                        <h2>Add a Billing Method</h2>
                    </div>
    <div className="billing_element">
    <form className="billingForm" onSubmit={submitBillingInfo}>
        <p>Your Name</p>
        <input className="billing_textInput" type="text" name="card_holder_name" onChange = {handleInput} placeholder="Name"/>
        <p>Card Number</p>
        <input className="billing_textInput" type="text" name="card_number" onChange = {handleInput} placeholder="Card_Number"/>
        <p>Password</p>
        <input className="billing_textInput" type="password" name="password" onChange = {handleInput}  placeholder="Password"/>
        <div className="billing_save">
            <Button className='btns' type="submit" buttonStyle='btn--outline' buttonSize='btn--large'>Save</Button>
        </div>
      </form>
    </div>
                </div>
            </div>
        </div>
    );

}

export default Billing_enterprise;