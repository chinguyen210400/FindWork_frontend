import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import { useEffect, useState } from "react";
import "../TalentDis/Talent_Modal.css";
function EmployeeModal(props) {
    
    return (
        <div className="talent_modalBackground">
        <div className="talent_modalContainer"  role='dialog'>
        <div className="talent_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
             <div class="box-cv-wrapper">
             <div class="box-sidebar">
                 <div class="avatar">
                     <img src="img/avatar.png" alt="" />
                 </div>
                 <div class="userinfo">
                     <div class="username"></div>
                     <div class="post"></div>
                 </div>
     
                 <div class="box">
                     <div class="main-title">Rating</div>
                     <div class="flex-box honor">
                         <div class="text"></div>
                         <div class="date"></div>
                     </div>
                     <Button className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>Block</Button>
                 </div>

             </div>
             <div class="talent_box-content">
                 <div class="main-title">Skill</div>
                
                 <div class="main-title">Education</div>
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="talent_content">
                             <div class="talent_name-company"></div>
                                                       
                             
                         </div>
                     </div>
                 </div>
                 <div class="main-title">Language</div>
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="talent_content">
                             <div class="talent_name-company"></div>
                         </div>
                     </div>
                 </div>
                 <div class="main-title">Certificate</div>
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="talent_content">
                             <div class="talent_name-company"></div>
                         </div>
                     </div>
                 </div>
                 
                 <div class="main-title">Experience</div>
                 
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="talent_content">
                             <div class="talent_name-company"></div>
                               
                             </div>
                     </div>
                 </div>

                 <div class="main-title">Reported</div>
                 
                 <div class="box">
                     <div class="talent_flex-box -exp">
                         <div class="talent_content">
                             <div class="talent_name-company"></div>
                               
                             </div>
                     </div>
                 </div>
                
             </div>
             </div>
        
      </div>
    </div>
    );
}

export default EmployeeModal; 