import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import "./TalentInvitation.css"
function TalentInvitation(props) {
    const [loading, setloading] = useState(false)
    const [jobList, setjobList] = useState([])
    const [jobInput, setjobInput] = useState()
    const token = localStorage.getItem("auth_token")
    const enterprise_id = localStorage.getItem("user_id")
    useEffect(() => {
       axios.get(`api/enterprise/${enterprise_id}/jobs`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
           console.log(res.data.jobs);
           setjobList(res.data.jobs)
       })
    }, [])
    const handleJobInput = e => {
        e.persist()
        setjobInput(e.target.value)
    }

    const submitInvite = e => {
        e.preventDefault()
        const data = {employee_id :props.employeeId }
        axios.post(`/api/job/${jobInput}/employee`,data,{headers : {"Authorization" : `Bearer ${token}`}} ).then(res => {
            alert(res.data.message)
        })
    }
    return (
        <div className="invitation_modalBackground">
        <div className="invitation_modalContainer" role='dialog'>
          <div className="invitation_titleCloseBtn">
            <button onClick={() => {props.setOpenModal(false);}}>X</button>
          </div>
      <div className="invitationmodal_header">
          <h1>Invited Jobs</h1>
      </div>
      {loading ? <h5>Loading </h5> : 
        <div className="invitation_body">
        <div className="invitation_list">
          {/* { invitationList.map((item) => {
          return (
              <SkillsItems key={item.id} click={() => deleteskillList(item.id)}  skill={item} />
          )})
          } */}
          </div>
          <div className="jobadd_skill">
              <label className="invitation_label"><p>Select Job to Invite</p></label>
                  <select name ="category_id" onChange={handleJobInput} value = {jobList.id} className ="form-control">
                      <option> Select Job</option>
                      {
                          jobList.map ( (item) => {
                              return (
                                      <option value = {item.id} key = {item.id}> {item.title}</option>
                              )
                          })
                      }
                  </select>   
                  <div className="invitation_button">
              <button onClick={submitInvite}>Invite</button>
              </div>
          </div>
      </div>
      }
    
      {/* <div className="footer">
          <button>Save</button>
      </div> */}
    </div>
      </div>
    )
}

export default TalentInvitation
