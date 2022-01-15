import React from "react";
import ReactStars from "react-rating-stars-component";
import "../MyJobs/Job_Modal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Layouts/Button";
function Rating_Modal(props) {
    const [jobInfo, setjobInfo] = useState({})
    const [ratingInfo, setratingInfo] = useState({rate : 0 })
    const [loading, setloading] = useState(true)
    const token = localStorage.getItem('auth_token')
    const user_id = localStorage.getItem('user_id')
  
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setratingInfo({...ratingInfo, rate: newRating})
        // console.log(ratingInfo);
    };

    const submitRating = e => {
        const job_id = props.employeeJobInfo.job_id
        const employee_id =  props.employeeJobInfo.employee_id
        e.preventDefault()
        axios.post(`api/job/${job_id}/employee/${employee_id}/rating`,ratingInfo, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            alert("Success")
        }).catch(err => {
            alert("Error")
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
          <form onSubmit={submitRating}>
              <div className="title"> 
              <h1>Rating Employee</h1>
              <br/>
              <h3>Score</h3>
              <ReactStars name = "score" count={5} onChange={ratingChanged} size={35} activeColor="#ffd700"/>
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

export default Rating_Modal;