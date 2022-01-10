import React ,  { useState, useEffect }from "react";
import "./Enterdetails_Modal.css";
import axios from "axios";

function Enterdetails_Modal({ setOpenModal }) {
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
    axios.put(`/api/enterprise/${id}`,enterpriseInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      alert("Update success")
      // window.location.reload()
    }).catch(err => {
      alert("Update fail. Try again!")
    })
  }
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
        <form className="enterdetails_ContactForm" onSubmit = {handleSubmit}>
        <p>Website Url</p>
        <input className="contact_textInput" type="text" name="website_url" onChange = {handleChange} value = {enterpriseInfo.website_url} placeholder="Url"/>
        <p>Overview</p>
        <input className="contact_textInput" type="textarea" name="overview" value = {enterpriseInfo.overview} onChange = {handleChange} placeholder="Overview"/>
        <div className="enterdetails_footer">
          <button type = "submit">Save</button>
        </div>
      </form>
        </div>
        
      </div>
    </div>
  );
}

export default Enterdetails_Modal;