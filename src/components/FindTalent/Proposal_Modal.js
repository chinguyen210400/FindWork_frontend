import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Proposal_Modal.css";
import { useState } from "react";
import axios from "axios";

function Proposal_Modal(props) {
  const jobId = props.job.id
  const token = localStorage.getItem("auth_token")
  const [employeeList, setemployeeList] = useState([])
  const [loading, setloading] = useState(true)
  const [status, setstatus] = useState("pending")

  useEffect(() => {
    axios.get(`api/job/${jobId}/employees`, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      console.log(res.data.employeeJobs);
      setemployeeList(res.data.employeeJobs)
      setloading(false)
      // console.log(res.data.employeeJobs[0].employee)
    }).catch(err => alert(err.message))
  }, [employeeList.status])

    const handleAccept = (e, employeeId) => {
    e.preventDefault()
    const thisClicked = e.currentTarget
    const data = {status : 'accepted'}
    thisClicked.innerText = "Accepting"
    axios.put(`/api/job/${jobId}/employee/${employeeId}`,data,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      alert(res.data.message)
    }).catch(err => 
      {
        alert("Cannot accept")
      })
  }
  const handleDecline = (e, employeeId) => {
    e.preventDefault()
    const thisClicked = e.currentTarget
    const data = {status : 'rejected'}
    thisClicked.innerText = "Declining"
    axios.put(`/api/job/${jobId}/employee/${employeeId}`,data,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
      alert(res.data.message)
      window.location.reload(false)
    }).catch(err => 
      {
        alert("Cannot decline")
      })

      // 
  }

  const displayButton = (status, employeeId) => {
    if (status == "pending"){
      return (
        <div>
        <td><Button onClick={(e) => handleAccept(e, employeeId)}>Accept</Button></td>
        <td><Button onClick={(e) => handleDecline(e, employeeId)}>Decline</Button></td>
        </div>
      )
    }
   
  }
    return (
        <div className="work_modalBackground">
        <div className="work_modalContainer">
        <div className="work_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link" aria-hidden="true" onClick={() => { props.setOpenModal(false); setloading(true)}}></Link> 
        </div>
        {loading ? <h5>Loading </h5> :
        <div className = "work_card">
        <div className="card-header"><h1>{props.job.title}</h1></div>
        <div className="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Language</th>
              <th scope="col">Overview</th>
            </tr>
          </thead>
            {
              employeeList.map((item) => {
                return (
                  <tbody>
                      <th scope = "row">{item.employee.user_id}</th>
                      <td>{item.employee.first_name + item.employee.last_name}  </td>
                      <td>{item.employee.address}</td>
                      <td>{item.employee.language}</td>
                      <td>{item.employee.overview}</td>
                      <td><Button>View</Button></td>
                      {displayButton(item.status, item.employee.user_id)}
                     
                      <td></td>

                  </tbody>
                )
              })
            }
         
        </table>

    </div>
    </div>}
        
        </div>
    </div>
    );
}

export default Proposal_Modal;