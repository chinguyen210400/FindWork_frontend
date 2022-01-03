import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Candidates_Modal.css";

function Candidates_Modal(props) {
    const employeeInfo = props.employeeInfo;
    console.log(employeeInfo);
    return (
        <div className="candidates_modalBackground">
        <div className="candidates_modalContainer"  role='dialog'>
        <div className="candidates_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div class="box-cv-wrapper">
        <div class="box-sidebar">
            <div class="avatar">
                <img src="img/avatar.png" alt="" />
            </div>
            <div class="userinfo">
                <div class="username">{employeeInfo.employee.first_name + " " + employeeInfo.employee.last_name}</div>
                {/* <div class="post">Frontend Developer</div> */}
            </div>{
                employeeInfo.status == "accepted" && 
                <div class="contact-info">
                <div class="item">
                    +84.91 111 8683
                </div>
                <div class="item">
                    nguyenyenchi@gmail.com
                </div>
                <div class="item">
                    Ha Noi, Viet Nam
                </div>
            </div>

            }
            <div class="box">
                <div class="main-title">Rating</div>
                <div class="flex-box honor">
                    <div class="text"></div>
                    <div class="date"></div>
                </div>
            </div>
        </div>
        <div class="box-content">

            <div class="main-title">Skill</div>
            {
                employeeInfo.employee.employee_skills.map((item) => {
                    return (
                        <div class="box">
                        <div class="flex-box -exp">
                            <div class="content">
                                <div class="name-company">{item.skill.name}</div>
                                <div class="pos">Level {item.level}</div>
                                <div class="pos">Experience {item. years_of_experience} years</div>

                               
                            </div>
                        </div>
                        </div>
                    )
                })
            }
            <div class="main-title">Education</div>
            <div class="box">
                <div class="flex-box -exp">
                    <div class="content">
                        <div class="name-company">{employeeInfo.employee.education}</div>
                                                  
                        
                    </div>
                </div>
            </div>
            
            <div class="main-title">Experience</div>
            
            <div class="box">
                <div class="flex-box -exp">
                    <div class="content">
                        <div class="name-company">{employeeInfo.employee.work_history}</div>
                          
                        </div>
                </div>
            </div>
           
        </div>
    </div>
      </div>
    </div>
    );
}

export default Candidates_Modal; 