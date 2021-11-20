import React from "react";
import "./Contact_Modal.css";

function Contact_Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>X</button>
        </div>
        <div className="title">
         <p>Change Contact </p>
        </div>
        <div className="body">
        <form className="ContactForm">
        <p>Address</p>
        <input className="contact_textInput" type="text" name="address" placeholder="Address"/>
        <p>Email</p>
        <input className="contact_textInput" type="text" name="email" placeholder="Email"/>
        <p>Phone Number</p>
        <input className="contact_textInput" type="text" name="phone_number" placeholder="Phone Number"/>
      </form>
        </div>
        <div className="footer">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Contact_Modal;