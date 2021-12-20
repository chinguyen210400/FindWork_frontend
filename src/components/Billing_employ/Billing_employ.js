import React from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import './Billing_employ.css';
import '../UserProfile/UserProfile.css'
function Billing_employ () {
    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Link to='/changeprofile'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-user" aria-hidden="true"></i>My Profile</Button></Link>
                        <Link to='/security_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i class="fa fa-lock" aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
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
      <form className="billingForm">
        <p>Your Name</p>
        <input className="billing_textInput" type="text" name="name" placeholder="Name"/>
        <p>Card Number</p>
        <input className="billing_textInput" type="text" name="card_number" placeholder="Card_Number"/>
        <p>Date value</p>
        <input className="billing_textInput" type="text" name="date" placeholder="Date"/>
        <p>Password</p>
        <input className="billing_textInput" type="password" name="password" placeholder="Password"/>
      </form>
    </div>

    <div className="billing_save">
    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Save</Button>
    </div>

                </div>
            </div>
        </div>
    );

}

export default Billing_employ;