import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import './Cards_invitedjobs';
import { useState } from "react";

function JobItems (props) {
    const [jobItem, setjobItem] = useState({})
    const user_id = localStorage.getItem("user_id")
    const token = localStorage.getItem("auth_token")
    const [loading, setloading] = useState(true)
    useEffect(() => {
       axios.get(`api/employee/${user_id}/job/${props.job.job_id}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
           setjobItem(res.data.employeeJob)
           console.log(res.data.employeeJob);
           setloading(false)
       })
    }, [])
    return (
        loading ? 
          <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
          </div> :
        <li className='jobs_item'>
            <div className='job_item_info'>
                <div className='job_item_title'>
                <h5  className='job_item_text'>{jobItem.job.title}</h5>
                <p className='job_item_text'>{jobItem.job.description}</p>
                { jobItem.status == "accepted" &&
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>Rating</Button>
                }
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>Report</Button>
            </div> 
            <div className='job_item_button' >
                 <Button onClick={props.click2} className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>View</Button>
                
                 {
                     jobItem.status == "pending" && <Button  className='btns' buttonStyle='btn--yellow' buttonSize='btn--medium'>WAITING</Button>
                 }    
                {
                     jobItem.status == "rejected" && <Button className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>REFUSE</Button>
                 }   
                 {
                     jobItem.status == "accepted" && <Button className='btns' buttonStyle='btn--green' buttonSize='btn--medium'>ACCEPT</Button>
                 }  
                
            </div>
               
            </div> 
        </li>
        
    );
}

export default JobItems;