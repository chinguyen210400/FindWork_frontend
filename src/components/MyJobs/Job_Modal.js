import React from "react";
import "./Job_Modal.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Modal(props) {
  const [jobInfo, setjobInfo] = useState({})
  const [enterpriseInfo, setenterpriseInfo] = useState({})
  const [loading, setloading] = useState(true)
  const token = localStorage.getItem('auth_token')
  const user_id = localStorage.getItem('user_id')

  useEffect(() => {
  
    axios.get(`api/job/${props.jobItem.job_id}`, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      console.log(res.data.job);
      setjobInfo(res.data.job)
      axios.get(`api/enterprise/${res.data.job.enterprise_id}`, {headers : {"Authorization" : `Bearer ${token}`}}).then( res=> {
  
      console.log(res.data.enterprise);
        setenterpriseInfo(res.data.enterprise)
      setloading(false)
    })
    })
    // console.log(jobInfo.enterprise_id);
  
  }, [])
  // const jobInfo = props.jobItem
  // console.log(jobInfo);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { props.setOpenModal(false);}}>X</button>
        </div>
        {loading ?
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        : 
          <div className="title"> 
            <h1>{jobInfo.title}</h1>
            <br/>
            <table className="table table-striped">
           <tbody>
             <tr>
               <th scope="row">Enterprise name</th>
               <td>{jobInfo.enterprise_id}</td>
             </tr>
             <tr>
               <th scope="row">Location</th>
               <td>{jobInfo.location}</td>
             </tr>
             <tr>
               <th scope="row">Skill</th>
               <td>{jobInfo.job_skills.map(item => item.skill.name + " ")}</td>
            
             </tr>

             <tr>
               <th scope="row">Salary</th>
               <td>{jobInfo.salary}</td>
             </tr>
             <tr>
               <th scope="row">Job Type</th>
               <td>{jobInfo.type}</td>
             </tr>
             <tr>
               <th scope="row">Number of employees</th>
               <td>{jobInfo.number_of_employees}</td>
             </tr>
             <tr>
               <th scope="row">Description </th>
               <td>{jobInfo.description}</td>
             </tr>
             <tr>
               <th scope="row">Contact email </th>
               {
                 props.jobItem.status == "accepted" ?
                 <td>{enterpriseInfo.email}</td> : 
                 <td><i>Waiting</i></td>
               }
             </tr>
             <tr>
               <th scope="row">Enterprise phone </th>
               {
                 props.jobItem.status == "accepted" ? 
                 <td>{enterpriseInfo.phone}</td>
                 : 
                 <td><i>Waiting</i></td>
               }
             </tr>
           </tbody>
            </table>
            <div className="footer">
            </div>
        </div>
      }
        
      </div>
    </div>
  );
}

export default Modal;