import React,{useEffect, useState} from "react";
import {Button} from '../Layouts/Button';
import { Link } from "react-router-dom";
import Contact_Modal from "./Contact_Modal";
import Skills_Modal from "./Skills_Modal";
import SkillsItems_profile from "./SkillsItems_profile";
import './UserProfile.css';
import axios from "axios";

function UserProfile () {
	const [showSkillsProfile,setShowSkillsProfile] = useState(true);
	const [userProfile, setuserProfile] = useState({})
	const [userid, setuserid] = useState(0)
    const [skillItemProfile,setSkillItemProfile] = useState([]);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [skillsModalOpen, setSkillsModalOpen] = useState(false);
	const employee_id = localStorage.getItem("user_id")
	useEffect(() => {
		axios.get(`api/employee/${employee_id}`, {headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
			setuserProfile(res.data.employee)
			setuserid(res.data.employee.user_id)
			console.log(userProfile)
		})
	}, [userid])

	useEffect(() => {
		axios.get(`api/employee/${localStorage.getItem("user_id")}/skills`, {headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
			// console.log(res.data.employeeSkills);
			// setSkillItemProfile(res.data.employeeSkills)
			const skill = res.data.employeeSkills.map((item) => {
				return {skillName: item.skill.name, skill : item}
			})
			console.log(skill);
			setSkillItemProfile(skill)
		})
	}, [skillItemProfile.length])

	const  skillsList = skillItemProfile.map((item) => {
		return (
			<SkillsItems_profile key={item.skill_id} skill ={item} />
		);
	})
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
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_list'>
                    <ul className='list_info'>
                        {/* <Button className='btn' buttonStyle='btn--test' buttonSize='btn--large'>Overview</Button>  */}
                        <Link to='/changeprofile' className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-user" aria-hidden="true"></i>My Profile</Button></Link>
                        <Link to='/security_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--mini'><i className="fa fa-lock " aria-hidden="true"></i>Password & Security</Button></Link>
                        <Link to='/billing_employ'  className = "link"><Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-cc-paypal" aria-hidden="true"></i>Billing & Payments</Button></Link>
						<Button className='btns'  onClick = {logOutSubmit} buttonStyle='btn--test' buttonSize='btn--large'><i className="fa fa-sign-out" aria-hidden="true"></i>Log out</Button>
                    </ul>
                </div>
            </div>
    <div className="resume_wrapper">
			{contactModalOpen && <Contact_Modal setOpenModal={setContactModalOpen} />}
            {skillsModalOpen && <Skills_Modal setOpenModal={setSkillsModalOpen} />}  
	<div className="resume_left">
		<div className="resume_image">
        <img src="/images/IMG_0714.JPG" alt="HTML Tutorial"/>
		</div>
		<div className="resume_bottom">
			{/* <div className="resume_item resume_profile">
				<div className="resume_title">Profile</div>
				<div className="resume_info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
			</div> */}
			{/* <div className="resume_item resume_contact">
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
			</div> */}
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
			<div className="name">{userProfile.first_name} {userProfile.last_name}</div>
		</div>
	
		<div className="resume_item resume_education">
			<div className="resume_title">Personal Information
			<i className="fa fa-edit fa-0.5x"onClick={() => {setContactModalOpen(true);}}></i></div>
		
			<div className="resume_info">
				<div className="resume_data">
					<div className="year">Email</div>
					<div className="content">
						{userProfile.email}
					</div>
				</div>
				<div className="resume_data">
					<div className="year">Phone</div>
					<div className="content">
						{userProfile.phone}
					</div>
				</div>
				<div className="resume_data">
					<div className="year">Address</div>
					<div className="content">
						{userProfile.address}
					</div>
				</div>
				<div className="resume_data">
					<div className="year">Language</div>
					<div className="content">
						{userProfile.language}
					</div>
				</div><div className="resume_data">
					<div className="year">Education</div>
					<div className="content">
						{userProfile.education}
					</div>
				</div>
				<div className="resume_data">
					<div className="year">Certificate </div>
					<div className="content">
						{userProfile.certificates}
					</div>
				</div>
				<div className="resume_data">
					<div className="year">Work History </div>
					<div className="content">
						{userProfile.work_history}
					</div>
				</div>
				<div className="resume_data">
					<div className="year">Overview </div>
					<div className="content">
						{userProfile.overview}
					</div>
				</div>
			</div>

			
		</div>
		{/* <div className="resume_item resume_experience">
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
		</div> */}
		<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  {/* <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"></input>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div> */}
</div>
	</div>
</div>  
</div> 
    
);

}

export default UserProfile;