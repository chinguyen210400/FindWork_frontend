import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </div>
        <div className="title">
          Modal
        </div>
        <div className="body">
            Hello I'm Dat
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}

export default Modal;