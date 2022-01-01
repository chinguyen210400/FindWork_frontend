import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import './Cards_myjobs';
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
    if (loading)
        return <h4> </h4>
    else
    return (
        <>
        <li className='jobs_item'>
            <div className='job_item_info'>
                <div className='job_item_title'>
                <h5  className='job_item_text'>{jobItem.job.title}</h5>
                <p className='job_item_text'>{jobItem.job.description}</p>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>Rating</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>Report</Button>
            </div> 
            <div className='job_item_button' >
                 <Button onClick={props.click2} className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>View</Button>     
                 <Button onClick={props.click1} className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>{jobItem.status}</Button>
                 
            </div>
               
            </div> 
        </li>
        </>
    );
}

export default JobItems;