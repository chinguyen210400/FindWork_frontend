import React from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";

function Security_enterprise () {
    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Link to='/enterpriseprofile'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-user" aria-hidden="true"></i>Enterprise Profile</Button></Link>
                        <Link to='/security_enterprise'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i class="fa fa-lock" aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_enterprise'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
                        <Link to='/'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-sign-out" aria-hidden="true"></i>Log out</Button></Link>
                    </ul>
                </div>
            </div>
            <div className='billing'>
                <div className='billing_title'>
                   <h1>Password & Security</h1> 
                </div>
                <div className='billing_info'>
                    <div className='billing_method'>
                        <h2>Add extra layers of security</h2>
                    </div>
    <div className="billing_element">
      <form className="billingForm">
        <input className="billing_textInput" type="password" name="password" placeholder="Password"/>
        <input className="billing_textInput" type="password" name="confirm_password" placeholder="confirm_Password"/>
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

export default Security_enterprise;