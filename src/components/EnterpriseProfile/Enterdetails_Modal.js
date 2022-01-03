import React from "react";
import "./Enterdetails_Modal.css";

function Enterdetails_Modal({ setOpenModal }) {
  return (
    <div className="enterdetails_modalBackground">
      <div className="enterdetails_modalContainer">
        <div className="enterdetails_titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>X</button>
        </div>
        <div className="enterdetails__title">
         <p>Company Details </p>
        </div>
        <div className="enterdetails_body">
        <form className="enterdetails_ContactForm">
        <p>Website Url</p>
        <input className="contact_textInput" type="text" name="url" placeholder="Url"/>
        <p>Overview</p>
        <input className="contact_textInput" type="text" name="overview" placeholder="Overview"/>
        
      </form>
        </div>
        <div className="enterdetails_footer">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Enterdetails_Modal;