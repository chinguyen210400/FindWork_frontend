import React,{useState} from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import Contact_Modal from "./Contact_Modal";
import Skills_Modal from "./Skills_Modal";
import SkillsItems_profile from "./SkillsItems_profile";
import './UserProfile.css';
import axios from "axios";

function UserProfile () {
	const [showSkillsProfile,setShowSkillsProfile] = useState(true);
        const [skillItemProfile,setSkillItemProfile] = useState([
            {text: "Digital Marketing"},
            {text: "Ruby on Rails Developer"},
            {text: "Mobile App Developer"},
            {text: "Social Media Manager"},
            
        ]);

        const  skillsList =skillItemProfile.map((item,index) => {
            return (
                <SkillsItems_profile key={index} text={item.text} />
            );
        }
)
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [skillsModalOpen, setSkillsModalOpen] = useState(false);
	const logOutSubmit = e => {
		e.preventDefault()
		const token = localStorage.getItem('auth_token');
		axios.get(`/api/logout`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
			localStorage.removeItem('auth_token');
			// swal("Success", res.data.message, "success");
			window.location.href = '/'
		})
	}
    return (
        <div className='profile_container'>
            {contactModalOpen && <Contact_Modal setOpenModal={setContactModalOpen} />}
            {skillsModalOpen && <Skills_Modal setOpenModal={setSkillsModalOpen} />}  
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        {/* <Button className='btn' buttonStyle='btn--test' buttonSize='btn--large'>Overview</Button>  */}
                        <Link to='/changeprofile' className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-user" aria-hidden="true"></i>My Profile</Button></Link>
                        <Link to='/security_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i className="fa fa-lock " aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
						<Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-sign-out" aria-hidden="true" onClick = {logOutSubmit}></i>Log out</Button>
                    </ul>
                </div>
            </div>
    <div className="resume_wrapper">
	<div className="resume_left">
		<div className="resume_image">
        <img src="/images/IMG_0714.JPG" alt="HTML Tutorial"/>
		</div>
		<div className="resume_bottom">
			<div className="resume_item resume_profile">
				<div className="resume_title">Profile</div>
				<div className="resume_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
			</div>
			<div className="resume_item resume_contact">
				<div className="resume_title">Contact <i className="fa fa-edit fa-0.5x" onClick={() => {setContactModalOpen(true);}} ></i></div>
                <div className="resume_info">
                <div className="resume_subtitle">Address</div>
				<div className="resume_subinfo">156 Ngoc Ha, Ba Dinh, Ha Noi, Viet Nam</div>	
				</div>
				<div className="resume_info">
					<div className="resume_subtitle">Phone</div>
					<div className="resume_subinfo">+62 000 222 333</div>
				</div>
				<div className="resume_info">
					<div className="resume_subtitle">Email</div>
					<div className="resume_subinfo">nguyenyenchi@gmail.com</div>
				</div>
			</div>
			<div className="resume_item resume_skills">
				<div className="resume_title">Skills <i className="fa fa-edit fa-0.5x" onClick={() => {setSkillsModalOpen(true);}} ></i></div>
				<div className="resume_info">
					<div className="skills_list">
						<div className="skills_left">{skillsList}</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="resume_right">
		<div className="resume_item resume_namerole">
			<div className="name">nguyen yen chi</div>
			<div className="role">UI Designer</div>
		</div>
		<div className="resume_item resume_education">
			<div className="resume_title">Education</div>
			<div className="resume_info">
				<div className="resume_data">
					<div className="year">2000 - 2010</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2010 - 2013</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="resume_item resume_experience">
			<div className="resume_title">Experience</div>
			<div className="resume_info">
				<div className="resume_data">
					<div className="year">2000 - 2010</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2010 - 2013</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="resume_data">
					<div className="year">2013 - 2015</div>
					<div className="content">
						<p>Title</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>  
</div> 
    
);

}

export default UserProfile;