import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./EnterpriseProfile.css";

function Enterprise_Profile() {
    return (
        <div className='enterprise_container'>
            <div className='enterprise_left'>
                <div className='enterprise_list'>
                    <ul className='list_info'>
                        <Link to='/enterpriseprofile'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-briefcase " aria-hidden="true"></i>Enterprise Profile</Button></Link>
                        <Link to='/security_enterprise'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i class="fa fa-lock " aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_enterprise'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i class="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
                    </ul>
                </div>
            </div>
            <div className='enterprise_user'>
    <div className="enterprise">
        <h1>Nguyen Chi </h1>
        <img src="/images/IMG_0714.JPG" alt="HTML Tutorial"/> 
    </div>

    <div className = "connect">
        <div className = "card">
            <div className="card-header">
            <h5>Company Acount</h5>
            </div>
        
            <div className="card-body">
                <ul>
                <p>Ngoc Ha, Ba Dinh, Ha Noi</p>
                <li><p>chi.ny184049@sis.hust.edu.vn</p></li>
                <li><p>0328481395</p></li>
                </ul>
            </div>   
        </div>      
    </div>

    <div className = "connect">
        <div className = "card">
            <div className="card-header">
            <h5>Company Contact</h5>
            </div>
        
            <div className="card-body">
                <ul>
                <p>Ngoc Ha, Ba Dinh, Ha Noi</p>
                <li><p>chi.ny184049@sis.hust.edu.vn</p></li>
                <li><p>0328481395</p></li>
                </ul>
            </div>   
        </div>      
    </div>

    <div className="skills">
    <div className = "card">
            <div className="card-header">
        <h5>Company Details </h5>
            </div>
            <div className="card-body">
        <ul>
            <li>
                <h3>  </h3>
                <ul>
                    <li><p></p></li>
                    <li><p></p> </li>
                    <li><p></p></li>
                    <li><p></p></li>
                    <li><p></p></li>
                </ul>
            </li>
            <li>
                <h3></h3>
                <ul>
                    <li><p></p></li>
                    <li><p></p></li>
                </ul>
            </li>
        </ul>
        </div>
        </div>
    </div>
</div>
</div>
        
    );
    }

export default Enterprise_Profile;