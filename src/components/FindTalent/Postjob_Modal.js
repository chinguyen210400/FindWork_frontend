import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Postjob_Modal.css";

function Postjob_Modal(props) {
    return (
        <div className="postjob_modalBackground" >
        <div className="postjob_modalContainer"  >
        <div className="postjob_titleCloseBtn">
        <Link className="fa fa-close fa-2x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div className="postjob_container" role='dialog'>
            <div className="postjob_title">
            <div className="postjob_button">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--mini'>Post a Job Now</Button> 
                </div>
                <h2>Now just finish and review your job post.</h2>
                
            </div>
            <div className="postjob_header">
                <div className="postjob_header_title">
                    <h6>Headline</h6>
                </div>
                <div className="postjob_header_input">
                    <input className="headline_textInput" type="text" name="headline" placeholder=""/>
                </div>
            </div>
            <div className="postjob_body">
                <div className="postjob_describe">
                <div className="postjob_describe_title">
                    <h6>Describe your job</h6>
                    <p>This is how talent figures out what you need and why you’re great to work with!Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your project, team, or company. Here are several examples that illustrate best practices for effective job posts.</p>
                </div>
                <div className="postjob_describe_input">
                <input className="describe_textInput" type="text" name="describe" placeholder="Have a job description ?"/>
                </div>
                </div>
                <div className="postjob_element">
                <div className="postjob_body_title">
                    <h6>Skills</h6>
                </div>
                <div className="postjob_body_input">
                <input className="skill_textInput" type="text" name="skill" placeholder=""/>
                </div>
                <div className="postjob_body_title">
                    <h6>Budget</h6>
                </div>
                <div className="postjob_body_input">
                    <input className="budget_textInput" type="text" name="skill" placeholder=""/>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
}

export default Postjob_Modal;