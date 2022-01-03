import React, {useState} from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import Entercontact_Modal from "./Entercontact_Modal";
import Enterdetails_Modal from "./Enterdetails_Modal";
import "./EnterpriseProfile.css";
import axios from "axios";

function Enterprise_Profile() {

    const [entercontactModalOpen, setEntercontactModalOpen] = useState(false);

    const [enterdetailsModalOpen, setEnterdetailsModalOpen] = useState(false);

    const logOutSubmit = e => {
		e.preventDefault()
		const token = localStorage.getItem('auth_token');
		axios.get(`/api/logout`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
			localStorage.removeItem('auth_token');
			localStorage.removeItem('role')
			localStorage.removeItem('user_id')
			
			// swal("Success", res.data.message, "success");
			window.location.href = '/'
		})
	}
    return (
        <div className='enterprise_container'>
            <div className='enterprise_left'>
                <div className='enterprise_list'>
                    <ul className='list_info'>
                        <Link to='/enterpriseprofile' className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-briefcase " aria-hidden="true"></i>Enterprise Profile</Button></Link>
                        <Link to='/security_enterprise' className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i class="fa fa-lock " aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_enterprise' className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
                        <Button className='btns'  onClick = {logOutSubmit} buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-sign-out" aria-hidden="true"></i>Log out</Button>
                    </ul>
                </div>
            </div>
            <div className='enterprise_user'>
            {entercontactModalOpen && <Entercontact_Modal setOpenModal={setEntercontactModalOpen} />}  
            {enterdetailsModalOpen && <Enterdetails_Modal setOpenModal={setEnterdetailsModalOpen} />}  
    <div className="enterprise">
        <h1>Nguyen Chi </h1>
        <img src="/images/IMG_0714.JPG" alt="HTML Tutorial"/> 
    </div>

    
    <div className = "connect">
        <div className = "enterprise_card">
            <div className="enterprise_card-header">
            <h5>Company Contact <i className="fa fa-edit fa-0.5x" onClick={() => {setEntercontactModalOpen(true);}}></i></h5>
           
            </div>
        
            <div className="enterprise_card-body">
                <ul>
                <li><p>Location : Ngoc Ha, Ba Dinh, Ha Noi</p></li>
                <li><p>Email : chi.ny184049@sis.hust.edu.vn</p></li>
                <li><p>Phone: 0328481395</p></li>
                </ul>
            </div>   
        </div>  
         
    </div>
    <div className="skills">
    <div className = "enterprise_card">
            <div className="enterprise_card-header">
        <h5>Company Details <i className="fa fa-edit fa-0.5x" onClick={() => {setEnterdetailsModalOpen(true);}}></i></h5>
            </div>
            <div className="enterprise_card-body">
                <h3>  </h3>
                <ul>
                    <li><p>Website Url: </p></li>
                    <li><p>Overview: </p> </li>
                    <li><p></p></li>
                    <li><p></p></li>
                    <li><p></p></li>
                </ul>
            </div>
    </div>
    </div>
</div> 
</div>
    );
    }

export default Enterprise_Profile;