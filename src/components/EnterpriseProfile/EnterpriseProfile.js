import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";

function Enterprise_Profile() {
    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Overview</Button> 
                        <Link to='/enterpriseprofile'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Enterprise Profile</Button></Link>
                        <Link to='/security_enterprise'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Password & Security</Button></Link>
                        <Link to='/billing_enterprise'><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Billing & Payments</Button></Link>
                    </ul>
                </div>
            </div>
<div className='profile_user'>
    
    <div className="profile">
        <h1>Nguyen Yen Chi </h1>
    </div>

    <div className = "connect">
        <h2>Contact<i class="fa fa-edit fa-0.5x" ></i></h2>
        <ul>
            <p>Ngoc Ha, Ba Dinh, Ha Noi</p>
            <li><p>chi.ny184049@sis.hust.edu.vn</p></li>
            <li><p>0328481395</p></li>
        </ul>
    </div>

    <div className="objectives">
      <p>  I want to learn more IT knowledge and have more interesting experiences.</p>    </div>

    <div className="skills">
        <h2>Skills <i class="fa fa-edit fa-0.5x" ></i></h2>
        <ul>
            <li>
                <h3> Professional </h3>
                <ul>
                    <li><p>Program Language: C/C++, Java, Python</p></li>
                    <li><p>Language: Japanese, English, Chinese</p> </li>
                    <li><p>Object Oriented Programming</p></li>
                    <li><p>Web Programming</p></li>
                    <li><p>System Programming</p></li>
                </ul>
            </li>
            <li>
                <h3>Soft Skills</h3>
                <ul>
                    <li><p>Teamwork</p></li>
                    <li><p>Connecting People</p></li>
                </ul>
            </li>
        </ul>
    </div>

    <div className="education">
        <h2>Education <i class="fa fa-edit fa-0.5x" ></i></h2>
        <ul>
            <li className="event">
                <p>Hanoi University Science and Technology</p>
            </li>
            <li><p>JLPT N3</p></li>
           
        </ul>
    </div>

    <div className="experience">
        <h2>Experience <i class="fa fa-edit fa-0.5x" ></i></h2>

    </div>

            </div>
        </div>
    );
}

export default Enterprise_Profile;