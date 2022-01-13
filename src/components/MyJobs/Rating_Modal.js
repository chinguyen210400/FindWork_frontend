import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Job_Modal.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Layouts/Button";
function Rating_Modal(props) {
    const [jobInfo, setjobInfo] = useState({})
    const [ratingInfo, setratingInfo] = useState({})
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
  
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setratingInfo({...ratingInfo, score: newRating})
        console.log(ratingInfo);
    };
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
              <h1>Rating Job</h1>
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