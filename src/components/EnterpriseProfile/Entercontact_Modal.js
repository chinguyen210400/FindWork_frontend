import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Entercontact_Modal.css";

function Entercontact_Modal(props) {
  
  const [enterpriseInfo, setenterpriseInfo] = useState({})
  const [loading, setloading] = useState(true)
  const id =  localStorage.getItem("user_id") 
  const token = localStorage.getItem('auth_token')
  useEffect(() => {
    axios.get(`/api/enterprise/${id}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
        console.log(res.data.enterprise);
        setenterpriseInfo(res.data.enterprise)
        setloading(false)
    })
    }, [])
  const handleChange = e => {
      e.persist()
      setenterpriseInfo({...enterpriseInfo, [e.target.name] : e.target.value})
      console.log(enterpriseInfo);
  }
  const handleSubmit = e => {
    e.preventDefault()
    axios.patch(`/api/enterprise/${id}`,enterpriseInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      alert("Update success")
      window.location.reload()
    }).catch(err => {
      alert("Update fail. Try again!")
    })
  }
  return (
    <div className="enter_modalBackground">
      <div className="enter_modalContainer">
        <div className="enter_titleCloseBtn">
          <button onClick={() => {props.setOpenModal(false);}}>X</button>
        </div>
        <div className="enter_title">
         <h3>Change Contact </h3>
        </div>{
          loading ? 
          <div class="spinner-border" role="status">
          			<span class="sr-only">Loading...</span>
        		</div> :
            <div className="enter_body">
            <form className="enter_ContactForm" onSubmit={handleSubmit}>
            <p>Name</p>
            <input className="contact_textInput" type="text" name="name" value = {enterpriseInfo.name} onChange = {handleChange} placeholder="Location"/>
            <p>Email</p>
            <input className="contact_textInput" type="text" name="email" value = {enterpriseInfo.email}  onChange = {handleChange} placeholder="Email"/>
            <p>Phone Number</p>
            <input className="contact_textInput" type="text"  name="phone" value = {enterpriseInfo.phone}  onChange = {handleChange} placeholder="Phone Number"/>
            
            <div className="enter_footer">
              <button type="submit">Save</button>
            </div>
          </form>
            </div>
        }
        
        
      </div>
    </div>
  );
}

export default Entercontact_Modal;