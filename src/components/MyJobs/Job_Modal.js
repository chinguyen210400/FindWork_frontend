import React from "react";
import "./Job_Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false);}}>X</button>
        </div>
        <div className="title">
          <h1>HVAC Technician</h1>
        </div>
        <div className="body">
          <div className="body_left">
            <p>Date Posted:	</p>
            <p>Remote Work Level:</p>
            <p>Location:</p>
            <p>Job Type:</p>
            <p>Job Schedule:</p>
            <p>Career Level:</p>
            <p>Categories:</p>
            <p>Company:</p>
          </div>
        <div className="body_right">
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
        <div className="footer">
        </div>
      </div>
    </div>
  );
}

export default Modal;