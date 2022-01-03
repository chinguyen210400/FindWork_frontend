import React from "react";
import "./Contact_Modal.css";
import { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom'

import axios from "axios";
function Contact_Modal({ setOpenModal }) {
  const [info, setinfo] = useState({})
  const token = localStorage.getItem("auth_token")
  const user_id = localStorage.getItem("user_id")
  const [loading, setloading] = useState(true)
  const history = useHistory()
  useEffect(() => {
    axios.get(`api/employee/${user_id}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      console.log(res.data.employee);
      setinfo(res.data.employee)
      setloading(false)
    })
  }, [])

  const handleInput = e => {
    e.persist()
    setinfo({...info, [e.target.name] : e.target.value})
  }
  const infoUpdateSubmit = e => {
    e.preventDefault()
    axios.patch(`/api/employee/${user_id}`,info, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      alert("Update success\n")
      history.push('/changeprofile')
    }).catch(err =>
      alert("There is an error\n"))
  }
  return (
    <div className="contact_modalBackground">
      <div className="contact_modalContainer" role='dialog'>
        <div className="contact_titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>X</button>
        </div>
        <div className="contact_title">
         <h3>Change Profile </h3>
        </div>
        {
          loading ? 
          <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
          </div> :
           <div className="contact_body">
           <form className="contact_ContactForm" onSubmit={infoUpdateSubmit}>
             <div className="right_form">
             <p>Email</p>
                   <input className="contact_textInput" type="text" name="email" onChange = {handleInput} value = {info.email}placeholder="Email"/>
             <p>Language</p>
                   <input className="contact_textInput" type="text" name="language"onChange = {handleInput}  value = {info.language} placeholder="Language"/>
             <p>Certificate</p>
                   <input className="contact_textInput" type="text" name="certificates" onChange = {handleInput} value = {info.certificates}placeholder="Certificate"/>
             <p>Work History</p>
                   <input className="contact_textInput" type="text" name="work_history" onChange = {handleInput}  value = {info.work_history} placeholder="Work history"/>
             </div>
             <div className="left_form">
               <p>First Name</p>
                 <input className="contact_textInput" type="text" name="first_name" onChange = {handleInput}  value = {info.first_name} placeholder="Address"/>
               <p>Last Name</p>
               <input className="contact_textInput" type="text" name="last_name" onChange = {handleInput}  value = {info.last_name}placeholder="Address"/>
               <p>Address</p>
               <input className="contact_textInput" type="text" name="address" onChange = {handleInput}  value = {info.address} placeholder="Address"/>
               <p>Phone Number</p>
               <input className="contact_textInput" type="text" name="phone" onChange = {handleInput}  value = {info.phone} placeholder="Phone Number"/>
               <p>Education</p>
               <input className="contact_textInput" type="text" name="education" onChange = {handleInput}  value = {info.education}placeholder="Education"/>
             
               <div class="form-outline mb-4">
                 <label class="form-label" for="form6Example7"><p>Overview</p></label>
                 <textarea class="form-control" id="form6Example7" rows="4" name = "overview" onChange = {handleInput}  value = {info.overview}></textarea>
               </div>
             </div>
           <div className="contact_footer">
             <button type="submit">Save</button>
           </div>
         </form>
           </div>
        }
       
        
      </div>
    </div>
  );
}

export default Contact_Modal;