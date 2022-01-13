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
//   useEffect(() => {
  
//     axios.get(`api/job/${props.jobItem.job_id}`, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
//       console.log(res.data.job);
//       setjobInfo(res.data.job)
//       axios.get(`api/enterprise/${res.data.job.enterprise_id}`, {headers : {"Authorization" : `Bearer ${token}`}}).then( res=> {
  
//       console.log(res.data.enterprise);
//         setenterpriseInfo(res.data.enterprise)
//       setloading(false)
//     })
//     })
//     // console.log(jobInfo.enterprise_id);
  
//   }, [])
  // const jobInfo = props.jobItem
  // console.log(jobInfo);

  const handleInput = e => {
      e.persist()
      setreportInfo({...reportInfo, [e.target.name] : e.target.value})
      console.log(props.jobItem.job_id);
      console.log(reportInfo);
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
        <form >
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