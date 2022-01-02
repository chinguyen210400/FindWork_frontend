import React, { useState } from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import '../UserProfile/UserProfile.css';
import axios from "axios";

function Security_employ () {
    const [passwordData, setpasswordData] = useState({})
    const token = localStorage.getItem("auth_token")
    const user_id = localStorage.getItem("user_id")
    console.log(token);
    const handleInput = e =>
    {
        e.persist()
        setpasswordData({...passwordData,[e.target.name] : e.target.value})
    }

    const changePassword = e =>
    {
        e.preventDefault()
        axios.post(`/api/user/${user_id}/update_password`,passwordData,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            alert(res.data.message)
        })
    }
    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Link to='/changeprofile'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-user" aria-hidden="true"></i>My Profile</Button></Link>
                        <Link to='/security_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i className="fa fa-lock" aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
                        <Link to='/'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-sign-out" aria-hidden="true"></i>Log out</Button></Link>
                    </ul>
                </div>
            </div>
            <div className='billing'>
                <div className='billing_title'>
                   <h1>Password & Security</h1> 
                </div>
                <div className='billing_info'>
                    <div className='billing_method'>
                        <h2>Change your password</h2>
                    </div>
    <div className="billing_element">
      <form className="billingForm" onSubmit ={changePassword}>
        <input className="billing_textInput" type="password" name="old_password" placeholder="Current Password" onChange={handleInput}/>
        <input className="billing_textInput" type="password" name="new_password" placeholder="New Password" onChange={handleInput}/>
        <input className="billing_textInput" type="password" name="new_password_confirmation" placeholder="Confirm New Password"onChange={handleInput}/>
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

export default Security_employ;