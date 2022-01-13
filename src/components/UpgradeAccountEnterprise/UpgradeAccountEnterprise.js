import React from "react";
import { useState } from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
function UpgradeAccountEnterprise () {
    const [planInfo, setplanInfo] = useState()
    const handleInput = e => {
        e.persist()
        setplanInfo({...planInfo,[e.target.name] : e.target.value})
        console.log(planInfo);
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
                   <h1>Upgrade Account</h1> 
                </div>
                <div className='billing_info'>
                    <div className='billing_method'>
                        <h2>Choose plan</h2>
                    </div>
                <div className="billing_element">
                <h4>Your plan info</h4>
                
                <form className="billingForm">
                    <p>Plan</p>
                    <select name ="plan" onChange = {handleInput} className ="form-control">
                        <option> Select Plan</option>
                        <option key= {1} value={1} >1 month</option>
                        <option key= {6} value={6} >6 months</option>
                        <option key= {12} value={12} >12 months</option>
                    </select>  
                    <div className="billing_save">
                        <Button type = "submit" className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Save</Button>
                    </div>
                </form>
                </div>

                

                </div>
            </div>
        </div>
    );

}

export default UpgradeAccountEnterprise;