import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Talent_Modal.css";
import { useEffect, useState } from "react";
import TalentInvitation from "./TalentInvitation";
function Talent_Modal(props) {
    const talentInfo = props.talentInfo
    const token = localStorage.getItem("auth_token")
    const [talentSkill, settalentSkill] = useState([])
    const [inviteModalOpen, setinviteModalOpen] = useState(false)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        axios.get(`api/employee/${talentInfo.user_id}/skills`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            console.log(res.data.employeeSkills);
            settalentSkill(res.data.employeeSkills)
            setloading(false)
        })
    }, [])
    
    return (
        <div className="talent_modalBackground">
             {inviteModalOpen && <TalentInvitation setOpenModal={setinviteModalOpen} employeeId = {talentInfo.user_id}/>}
        <div className="talent_modalContainer"  role='dialog'>
        <div className="talent_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        {
            loading ? 
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div> : 
             <div class="box-cv-wrapper">
             <div class="box-sidebar">
                 <div class="avatar">
                     <img src="img/avatar.png" alt="" />
                 </div>
                 <div class="userinfo">
                     <div class="username">{talentInfo.first_name + " " + talentInfo.last_name}</div>
                     <div class="post">{talentInfo.overview}</div>
                 </div>
     
                 <div class="box">
                     <div class="main-title">Rating</div>
                     <div class="flex-box honor">
                         <div class="text"></div>
                         <div class="date"></div>
                     </div>
                 </div>

                <Button onClick={() => setinviteModalOpen(true)}>Invite</Button>
             </div>
             <div class="talent_box-content">
                 <div class="main-title">Skill</div>
                 {
                     talentSkill.map((item) => {
                         return (
                             <div class="box">
                             <div class="flex-box -exp">
                                 <div class="content">
                                     <div class="talent_name-company">{item.skill.name}</div>
                                     <div class="talent_pos">Level {item.level}</div>
                                     <div class="talent_pos">Experience {item. years_of_experience} years</div>
                                 </div>
                             </div>
                             </div>
                         )
                     })
                 }
                 <div class="main-title">Education</div>
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="content">
                             <div class="talent_name-company">{talentInfo.education}</div>
                                                       
                             
                         </div>
                     </div>
                 </div>
                 <div class="main-title">Language</div>
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="content">
                             <div class="talent_name-company">{talentInfo.language}</div>
                         </div>
                     </div>
                 </div>
                 <div class="main-title">Certificate</div>
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="content">
                             <div class="talent_name-company">{talentInfo.certificates}</div>
                         </div>
                     </div>
                 </div>
                 
                 <div class="main-title">Experience</div>
                 
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="content">
                             <div class="talent_name-company">{talentInfo.work_history}</div>
                               
                             </div>
                     </div>
                 </div>
                
             </div>
             </div>
        }
       
      </div>
    </div>
    );
}

export default Talent_Modal; 