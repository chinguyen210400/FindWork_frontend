import React from "react";
import "./Job_Modal.css";

function Job_Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </div>
        <div className="title">
          
        </div>
        <div className="body">
          
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}

export default Job_Modal;