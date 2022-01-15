import React from "react";
import "./Job_Modal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Layouts/Button";
function Report_Modal(props) {
  const [jobInfo, setjobInfo] = useState({})
  const [reportInfo, setreportInfo] = useState({})
  const [loading, setloading] = useState(true)
  const token = localStorage.getItem('auth_token')
  const user_id = localStorage.getItem('user_id')
  const job_id = props.jobItem.job_id
  
  const handleInput = e => {
      e.persist()
      setreportInfo({...reportInfo, [e.target.name] : e.target.value})
      console.log(reportInfo);
  }
  const submitReport = e => {
      e.preventDefault()
      axios.post(`/api/employee/${user_id}/job/${job_id}/report`,reportInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
        alert("Report success")
        // window.location.reload()
        props.setOpenModal(false)
      }).catch(err => {
        alert("Error Cannot report")
      })
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => {props.setOpenModal(false)}}>X</button>
        </div>
        {/* {loading ?
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        :  */}
        <form onSubmit={submitReport
        }>
            <div className="title"> 
            <h1>Report Job</h1>
            <br/>
            <h3>Reason</h3>
            <input className="textInput" type = "textarea" name = "reason" onChange={handleInput}></input>
            <div className="footer">
            </div>
            <Button type = "submit">Submit</Button>
        </div>
        </form>
        
      {/* } */}
        
      </div>
    </div>
  );
}

export default Report_Modal;