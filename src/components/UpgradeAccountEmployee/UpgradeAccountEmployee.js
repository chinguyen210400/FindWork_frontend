import React from "react";
import { useState , useEffect} from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import axios from "axios";
function UpgradeAccountEmployee () {
    const [planInfo, setplanInfo] = useState()
    const [billingInfo, setbillingInfo] = useState({})
    const token = localStorage.getItem('auth_token')
    useEffect(() => {
        axios.get(`/api/bank_account`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            const temp = res.data.bankAccounts;
                if (temp.length != 0 ){
                    console.log(temp.length);
                    setbillingInfo(temp[0])
                    setplanInfo({...planInfo, id : temp[0].id })
                }
        })
    }, [])
    
    const handleInput = e => {
        e.persist()
        setplanInfo({...planInfo,[e.target.name] : e.target.value})
        console.log(planInfo);
    }

    const submitPlan = e => {
        e.preventDefault()
        axios.post(`/api/payment`,planInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            alert("Upgrade success")
        })
    }

    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Link to='/changeprofile'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-user" aria-hidden="true"></i>Enterprise Profile</Button></Link>
                        <Link to='/security_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i class="fa fa-lock" aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
                        <Link to='/upgradeaccount_employee'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Upgrade Account</Button></Link>
                        <Link to='/'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-sign-out" aria-hidden="true"></i>Log out</Button></Link>
                    </ul>
                </div>
            </div>
            <div className='billing'>
                <div className='billing_title'>
                   <h1>Upgrade Account</h1> 
                </div>
                {
                    billingInfo.id ? <div className='billing_info'>
                    <div className='billing_method'>
                        <h2>Choose plan</h2>
                    </div>
                <div className="billing_element">
                <h4>Your plan info</h4>
                
                <form className="billingForm" onSubmit={submitPlan}>
                    <p>Plan</p>
                    <select name ="month" onChange = {handleInput} className ="form-control">
                        <option> Select Plan</option>
                        <option key= {1} value={1} >1 month</option>
                        <option key= {6} value={6} >6 months</option>
                        <option key= {12} value={12} >12 months</option>
                    </select>  
                    <p>Password</p>
                    <input className="billing_textInput" type="password" name="password" onChange = {handleInput}  placeholder="Password"/>
                    <div className="billing_save">
                        <Button type = "submit" className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Save</Button>
                    </div>
                </form>
                </div>
                </div> : 
                <div>
                    <h4>You don't have any bank account</h4>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'> 
                    <Link className='link' to = "/billing_employ">Add a bank account</Link></Button>
                </div>
                }
                
            </div>
        </div>
    );

}

export default UpgradeAccountEmployee;