import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Work_Modal.css";
import { useContext } from "react";
import WorkContext from '../pages/findwork'
function Work_Modal(props) {
    const work = props.work;
    console.log(work);
    return (
        <div className="work_modalBackground">
        <div className="work_modalContainer">
        <div className="work_titleCloseBtn">
        <Link className="fa fa-angle-left fa-2x" aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div className = "work_card">
            <div className="card-header"><h1>HVAC Technician</h1></div>
            <div className="card-body">
        <div className="work_body_left">
        <p></p>
            <p>Remote Work Level:</p>
            <p>Location:</p>
            <p>Job Type:</p>
            <p>Job Description</p>
            <p>Number of employee</p>
            <p>Salary per hour</p>
            <p>Company:</p>
           
        </div>
          <div className="work_body_right">
            <p></p>
            <p></p>
            <p>{work.location}</p>
            <p>work.type</p>
            <p>work.description</p>
            <p>work.number_of_employees</p>
            <p>work.salary</p>
            <p></p>
          </div>
        </div>
        <Link to='/'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--max'>Submit a Prosopal</Button></Link> 
        <Link to='/'><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--max'>Save a Job</Button></Link> 
        </div>
      </div>
    </div>
    );
}

export default Work_Modal;