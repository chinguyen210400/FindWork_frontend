import React from "react";
import ReactStars from "react-rating-stars-component";
import "../MyJobs/Job_Modal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Layouts/Button";
function ReportModal(props) {
    const [reportInfo, setreportInfo] = useState({
        reason : '',
        id: ''
    })
    const [loading, setloading] = useState(true)
    const token = localStorage.getItem('auth_token')
    const user_id = localStorage.getItem('user_id')
    const job_id = props.employeeJobInfo.job_id
    const employee_id =  props.employeeJobInfo.employee_id
    useEffect(() => {
       axios.get(`api/job/${job_id}/employee/${employee_id}/reports`, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            console.log(res.data.reportEmployees);
            setreportInfo(res.data.reportEmployees)
            setloading(false)
       }).catch(err => {
           alert("Enter new report")
           setloading(false)
       })
    }, [])
    const handleInput = e => {
        e.persist()
        setreportInfo({...reportInfo, [e.target.name] : e.target.value})
    }

    const submitReport = e => {
        e.preventDefault()
        // if (reportInfo.reason){
        //     axios.put(`api/job/${job_id}/employee/${employee_id}/report/${reportInfo.id}`,reportInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
        //         alert("Success")
        //         window.location.reload()
        //     }).catch(err => {
        //         alert("Error")
        //     })
        // }
        // else {
            axios.post(`api/job/${job_id}/employee/${employee_id}/report`,reportInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                alert("Success")
                window.location.reload()
            }).catch(err => {
                alert("Error")
            })
        // }
        
    }
    return (
        <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => {props.setOpenModal(false)}}>X</button>
          </div>
          {loading ?
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          : 
          <form onSubmit={submitReport}>
              <div className="title"> 
              <h1>Report Employee</h1>
              <br/>
              <h3>Reason</h3>
              <input className="textInput" type = "textarea" name = "reason" value = {reportInfo.reason} onChange={handleInput}></input>
              <div className="footer">
              </div>
              <Button type = "submit">Submit</Button>
          </div>
          </form>
            }
      
        </div>
      </div>
    );
}

export default ReportModal;