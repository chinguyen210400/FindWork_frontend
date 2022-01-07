import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import Candidates_Modal from "./Candidates_Modal";
import "./Proposal_Modal.css";
import { useState } from "react";
import axios from "axios";

function Proposal_Modal(props) {
  const jobId = props.job.id
  const token = localStorage.getItem("auth_token")
  const [employeeList, setemployeeList] = useState([])
  const [loading, setloading] = useState(true)
  const [status, setstatus] = useState("pending")
  const [employeeInfo, setemployeeInfo] = useState({})
  const [candidatesModalOpen, setCandidatesModalOpen] = useState(false);

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
      }
      )
  }

  const displayButton = (item) => {
    const status = item.status
    const direction = item.offer_direction
    const employeeId = item.employee.user_id
    if (status == "pending" && direction == "employee"){
      return (
        <div>
        <td><Button className='btns' buttonStyle='btn--green' buttonSize='btn--medium' onClick={(e) => {handleAccept(e, employeeId)}}>Accept</Button></td>
        <td><Button className='btns' buttonStyle='btn--noti' buttonSize='btn--medium' onClick={(e) => {handleDecline(e, employeeId); status = "rejected"}} >Decline</Button></td>
        </div>
      )
    }
      if (status == "pending"){
        return (
          <div>
             <td><Button className='btns' buttonStyle='btn--yellow' buttonSize='btn--medium' ><i>Waiting</i></Button></td>
             <td></td>
          </div>
       ) 
      }
      else if (status == "accepted")
        return  (
        <div>
          <td><Button className='btns' buttonStyle='btn--green' buttonSize='btn--medium'>Accepted</Button></td>
          <td></td>
        </div>
        )
      else 
        return  (
        <div>
          <td><Button className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>Rejected</Button></td>
          <td></td>
        </div>)
  }
    return (
        <div className="job_modalBackground">
           {candidatesModalOpen && <Candidates_Modal setOpenModal={setCandidatesModalOpen} employeeInfo = {employeeInfo}/>}
        <div className="job_modalContainer">
        <div className="job_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link" aria-hidden="true" onClick={() => { props.setOpenModal(false); setloading(true)}}></Link> 
        </div>
        {loading ? <h5>Loading </h5> :
        <div className = "job_card">
        <div className="card-header"><h1>{props.job.title}</h1></div>
        <div className="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Overview</th>
            </tr>
          </thead>
            {
              employeeList.map((item) => {
                return (
                  <tbody>
                      <th scope = "row">{item.employee.user_id}</th>
                      <td>{item.employee.first_name +" "+  item.employee.last_name}  </td>
                      <td>{item.employee.address}</td>
                      <td>{item.offer_direction == "employee" ? "Request" : "Invite"} </td>
                      <td>{item.employee.overview}</td>
                      <td><Button className='btns' buttonStyle='btn--view' buttonSize='btn--medium'  onClick={() => {setCandidatesModalOpen(true); setemployeeInfo(item)}}>View more</Button></td>
                      {displayButton(item)}
                     
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