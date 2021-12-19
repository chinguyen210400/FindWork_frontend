import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Work_Modal.css";

function Work_Modal({ setOpenModal }) {
    return (
        <div className="work_modalBackground">
        <div className="work_modalContainer">
        <div className="work_titleCloseBtn">
        <i class="fa fa-angle-left fa-2x" aria-hidden="true" onClick={() => { setOpenModal(false);}}></i> 
        </div>
        <div className = "work_card">
            <div className="card-header"><h1>HVAC Technician</h1></div>
            <div className="card-body">
        <div className="work_body_right">
            <p>Date Posted:	In this example, the image will float to the right in the paragraph, and the text in the paragraph will wrap around the image.</p>
            <p>Remote Work Level:</p>
            <p>Location:</p>
            <p>Job Type:</p>
            <p>Job Schedule:</p>
            <p>Career Level:</p>
            <p>Categories:</p>
            <p>Company:</p>
        </div>
          <div className="work_body_left">
            <p>Date Posted:	</p>
            <p>Remote Work Level:</p>
            <p>Location:</p>
            <p>Job Type:</p>
            <p>Job Schedule:</p>
            <p>Career Level:</p>
            <p>Categories:</p>
            <p>Company:</p>
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