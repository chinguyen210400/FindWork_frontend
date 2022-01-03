import React from "react";
import "./Entercontact_Modal.css";

function Entercontact_Modal({ setOpenModal }) {
  return (
    <div className="enter_modalBackground">
      <div className="enter_modalContainer">
        <div className="enter_titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>X</button>
        </div>
        <div className="enter_title">
         <h3>Change Contact </h3>
        </div>
        <div className="enter_body">
        <form className="enter_ContactForm">
        <p>Location</p>
        <input className="contact_textInput" type="text" name="location" placeholder="Location"/>
        <p>Email</p>
        <input className="contact_textInput" type="text" name="email" placeholder="Email"/>
        <p>Phone Number</p>
        <input className="contact_textInput" type="text" name="phone_number_enterprise" placeholder="Phone Number"/>
      </form>
        </div>
        <div className="enter_footer">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Entercontact_Modal;