import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Job_Modal.css";
import { useState, useEffect } from "react";
import JobContext from '../pages/findjob.js'
import axios from "axios";
import JobSkill_Modal from "../FindTalent/JobSkill_Modal";
function Job_Modal(props) {
    const job = props.jobItem;
    console.log(job);
    const data = {job_id : job.id}
    const [jobSkill, setJobSkill] = useState([])
    const [enterpriseInfo, setenterpriseInfo] = useState([])
    const [skill, setSkill] = useState([])
    const [submit, setSubmit] = useState(false)
    const [loading, setloading] = useState(true)
    // const [loading2, setloading2] = useState(true)
    const user_id = localStorage.getItem("user_id")
    const [status, setstatus] = useState("pending")
    useEffect(() => {
      axios.get(`/api/employee/${user_id}/job/${job.id}`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
          const employeeJob = res.data.employeeJob
          if (employeeJob.employee_id == user_id){
            setSubmit(true)
          }
          setstatus(employeeJob.status)
          console.log(employeeJob);
      }).catch(err => {
        setSubmit(false)
      })

      axios.get(`/api/job/${job.id}/skills`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
        setJobSkill(res.data.jobSkills)
        console.log(res.data.jobSkills);
      })

      axios.get(`/api/enterprise/${job.enterprise_id}`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
        console.log(res.data.enterprise)
        setenterpriseInfo(res.data.enterprise)
        setloading(false)
      })


    }, [])

    // console.log(job);
    const submitHandle = e =>{
      e.persist()
      axios.post(`/api/employee/${localStorage.getItem("user_id")}/job`,data,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
        alert("Add success\n")
        setSubmit(true)
      })
      .catch(err => {
          alert("Failed")
      })
    }
    
    const cancelHandle = e => {
      e.persist()
      axios.delete(`/api/employee/${localStorage.getItem("user_id")}/job/${job.id}`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
        alert("Cancel proposal success\n")
        setSubmit(false)
      })
      .catch(err => {
          alert("Failed")
      })
    }
      return (
        <div className="job_modalBackground">
        <div className="job_modalContainer">
        <div className="job_titleCloseBtn">
        <Button className="fa fa-angle-left fa-2x" aria-hidden="true" onClick={() => { props.setOpenModal(false); setloading(true)}}>Back</Button> 
        <br></br>
        </div>
        {loading ? 
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div> :  
         <div className = "job_card">
         <div className="card-header"><h1>{job.title}</h1></div>
         <div className="card-body">
         <table className="table table-striped">
           <tbody>
             <tr>
               <th scope="row">Enterprise name</th>
               <td>{enterpriseInfo.name}</td>
             </tr>
             <tr>
               <th scope="row">Location</th>
               <td>{job.location}</td>
             </tr>
             <tr>
               <th scope="row">Skill</th>
               <td>{jobSkill.map(item => item.skill.name + " (Level: " + item.level + ")  ")}</td>
            
             </tr>

            
             <tr>
               <th scope="row">Salary</th>
               <td>{job.salary}</td>
             </tr>
             <tr>
               <th scope="row">Job Type</th>
               <td>{job.type}</td>
             </tr>
             <tr>
               <th scope="row">Number of employees</th>
               <td>{job.number_of_employees}</td>
             </tr>
             <tr>
               <th scope="row">Description </th>
               <td>{job.description}</td>
             </tr>
           </tbody>
         </table>

         {/* <div className="job_body_right">
         <p></p>
         <p>{job.location}</p>
         <p>{job.salary}</p>
         <p>{job.number_of_employees}</p>
         <p>{job.type}</p>
         <p>{job.description}</p>

         </div>
       <div className="job_body_left">
         <p></p>
         <p>Location:</p>
         <p>:</p>
         <p></p>
         <p>Number of employees</p>
         <p>Type</p>
         <p>Description</p>
       </div> */}
     </div>
     { !submit && <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--max' onClick={submitHandle}>Submit a Proposal</Button>}
     { 
       submit && status == "pending" && <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--max' onClick = {cancelHandle}>Cancel Proposal</Button>
     }
     </div> }
       
      </div>
    </div>
    );
    }
   

export default Job_Modal;