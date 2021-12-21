import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Proposal_Modal.css";
import { useState } from "react";

function Proposal_Modal(props) {
    return (
        <div className="work_modalBackground">
        <div className="work_modalContainer">
        <div className="work_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link" aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div className = "work_card">
            <div className="card-header"><h1>HVAC Technician</h1></div>
            <div className="card-body">
            <div className="work_body_right">
            <p>title</p>
            <p>enterprise_id</p>
            <p>location</p>
            <p>salary</p>
            <p>number_of_employees</p>
            <p>type</p>
            <p>description</p>
            {/* <p>Company:</p> */}
        </div>
          <div className="work_body_left">
            <p>Job Name</p>
            <p>Enterprise name</p>
            <p>Location:</p>
            <p>Job Type:</p>
            <p>Salary</p>
            <p>Number of employees</p>
            <p>Type</p>
            <p>Description</p>
          </div>
        </div>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--max' >Edit Proposal</Button>
        
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--max' >Delete Proposal</Button>
        
        </div>
      </div>
    </div>
    );
}

export default Proposal_Modal;