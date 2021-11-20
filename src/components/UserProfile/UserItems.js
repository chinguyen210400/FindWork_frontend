import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./UserProfile.css";

function UserItems(props) {
    return (
        <div className='profile_user'>
    
    <div className="profile">
        <h1>{props.firstname} {props.lastname}</h1>
        <img src="/images/IMG_0714.JPG" alt="HTML Tutorial"/>
    </div>

    <div className = "connect">
        <h2>Contact<i class="fa fa-edit fa-0.5x" ></i></h2>
        <ul>
            <p>{props.address}</p>
            <li><p>{props.email}</p></li>
            <li><p>{props.phone}</p></li>
        </ul>
    </div>

    <div className="objectives">
      <p>  {props.overview}</p>    </div>

    <div className="skills">
        <h2>Skills <i class="fa fa-edit fa-0.5x" ></i></h2>
        <ul>
            <li>
                <h3> Professional </h3>
                <ul>
                    <li><p>Program Language: C/C++, Java, Python</p></li>
                    <li><p>{props.languege}</p> </li>
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
                <p>{props.education}</p>
            </li>
            <li><p>{props.ceritificate}</p></li>
        </ul>
    </div>

    <div className="experience">
        <h2>Experience <i class="fa fa-edit fa-0.5x" ></i></h2>

    </div>
            </div>
    );
}

export default UserItems;
