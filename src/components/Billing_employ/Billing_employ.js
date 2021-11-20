import React from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import './Billing_employ.css';

function Billing_employ () {
    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Overview</Button> 
                        <Link to='/changeprofile'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>My Profile</Button></Link>
                        <Link to='/security_employ'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Password & Security</Button></Link>
                        <Link to='/billing_employ'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Billing & Payments</Button></Link>
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
        <input className="billing_textInput" type="text" name="name" placeholder="Name"/>
        <input className="billing_textInput" type="text" name="card_number" placeholder="Card_Number"/>
        <input className="billing_textInput" type="text" name="date" placeholder="Date"/>
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