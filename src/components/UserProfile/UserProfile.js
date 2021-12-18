import React,{useState} from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import Contact_Modal from "./Contact_Modal";
import './UserProfile.css';

function UserProfile () {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='profile_container'>
            {modalOpen && <Contact_Modal setOpenModal={setModalOpen} />}
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        {/* <Button className='btn' buttonStyle='btn--test' buttonSize='btn--large'>Overview</Button>  */}
                        <Link to='/changeprofile' className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>My Profile</Button></Link>
                        <Link to='/security_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Password & Security</Button></Link>
                        <Link to='/billing_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Billing & Payments</Button></Link>
                    </ul>
                </div>
            </div>
<div className='profile_user'>
    <div className="profile">
        <h1>Nguyen Yen Chi </h1>
        {/* <img src="/images/IMG_0714.JPG" alt="HTML Tutorial"/> */}
    </div>

    <div className = "connect">
        <div className = "card">
            <div className="card-header">
            <h5>Contact<i class="fa fa-edit fa-0.5x" onClick={() => {setModalOpen(true);}} ></i></h5>
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

export default UserProfile;