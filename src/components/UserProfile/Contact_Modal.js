import React from "react";
import "./Contact_Modal.css";

function Contact_Modal({ setOpenModal }) {
  return (
    <div className="contact_modalBackground">
      <div className="contact_modalContainer" role='dialog'>
        <div className="contact_titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>X</button>
        </div>
        <div className="contact_title">
         <h3>Change Profile </h3>
        </div>
        <div className="contact_body">
        <form className="contact_ContactForm">
          <div className="right_form">
          <p>Email</p>
                <input className="contact_textInput" type="text" name="email" placeholder="Email"/>
          <p>Language</p>
                <input className="contact_textInput" type="text" name="language" placeholder="Language"/>
          <p>Certificate</p>
                <input className="contact_textInput" type="text" name="certificate" placeholder="Certificate"/>
          </div>
          <div className="left_form">
        <p>Address</p>
        <input className="contact_textInput" type="text" name="address" placeholder="Address"/>
        <p>Phone Number</p>
        <input className="contact_textInput" type="text" name="phone_number" placeholder="Phone Number"/>
        <p>Education</p>
        <input className="contact_textInput" type="text" name="education" placeholder="Education"/>
        <p>Work History</p>
        <input className="contact_textInput" type="text" name="workhistory" placeholder="Work history"/>
        <div class="form-outline mb-4">
          <label class="form-label" for="form6Example7"><p>Overview</p></label>
          <textarea class="form-control" id="form6Example7" rows="4"></textarea>
         
        </div>
        </div>
      </form>
        </div>
        <div className="contact_footer">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Contact_Modal;