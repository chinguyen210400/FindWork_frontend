import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Work_Modal.css";
import { useState, useEffect } from "react";
import WorkContext from '../pages/findwork'
import axios from "axios";
function Work_Modal(props) {
    const work = props.workItem;
    const data = {job_id : work.id}
    const [jobSkill, setJobSkill] = useState([])
    const [skill, setSkill] = useState([])
    const [submit, setSubmit] = useState(false)
    const [loading, setloading] = useState(true)
    const user_id = localStorage.getItem("user_id")


    useEffect(() => {
      axios.get(`/api/job/${work.id}/skills`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
          setJobSkill(res.data.jobSkills)
          console.log(res.data.jobSkills);
      })
    }, [])

    // useEffect(() => {
    //   var data = []
    //   // if (!jobSkill){
    //     jobSkill.map((item) => {
    //       var skill_id = item.skill_id
    //       axios.get(`/api/skill/${skill_id}`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
    //         data = data.append({...item, 'skillName': res.data.skill.name})
    //     })
    //     })
    //   // }
    //   setSkill(data)
    // }, [])


    useEffect(() => {
      axios.get(`/api/employee/${user_id}/job/${work.id}`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
          const employeeJob = res.data.employeeJob
          if (employeeJob.employee_id == user_id){
            setSubmit(true)
            setloading(false)
          }
          console.log(employeeJob);
      })
    }, [])
    // console.log(work);
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
      axios.delete(`/api/employee/${localStorage.getItem("user_id")}/job/${work.id}`,{headers : {"Authorization" : `Bearer ${localStorage.getItem("auth_token")}`}}).then(res => {
        alert("Cancel proposal success\n")
        setSubmit(false)
      })
      .catch(err => {
          alert("Failed")
      })
    }
      return (
        <div className="work_modalBackground">
        <div className="work_modalContainer">
        <div className="work_titleCloseBtn">
        <Link className="fa fa-angle-left fa-2x" aria-hidden="true" onClick={() => { props.setOpenModal(false); setloading(true)}}></Link> 
        </div>
        <div className = "work_card">
            <div className="card-header"><h1>{work.title}</h1></div>
            <div className="card-body">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">Enterprise name</th>
                  <td>{work.enterprise_id}</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>{work.location}</td>
                </tr>
                <tr>
                  <th scope="row">Skill</th>
                  {/* <td>{job.}</td> */}
                  {jobSkill.map(item => {
                  return  (
                  <tr>
                    <th>Skill name</th>
                    <td>
                    {item.skill_id }
                    </td>
                  </tr>)
                })}
                </tr>

               
                <tr>
                  <th scope="row">Salary</th>
                  <td>{work.salary}</td>
                </tr>
                <tr>
                  <th scope="row">Job Type</th>
                  <td>{work.type}</td>
                </tr>
                <tr>
                  <th scope="row">Number of employees</th>
                  <td>{work.number_of_employees}</td>
                </tr>
                <tr>
                  <th scope="row">Description </th>
                  <td>{work.description}</td>
                </tr>
              </tbody>
            </table>

            {/* <div className="work_body_right">
            <p></p>
            <p>{work.location}</p>
            <p>{work.salary}</p>
            <p>{work.number_of_employees}</p>
            <p>{work.type}</p>
            <p>{work.description}</p>

            </div>
          <div className="work_body_left">
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
          submit && <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--max' onClick = {cancelHandle}>Cancel Proposal</Button>
        }
        </div>
      </div>
    </div>
    );
    }
   

export default Work_Modal;