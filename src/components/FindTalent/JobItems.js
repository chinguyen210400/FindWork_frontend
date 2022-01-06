import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import './Cards_findtalent';

function JobItems (props) {

    return (
        <>
        <li className='jobs_item'>
            <div className='job_item_info'>
            <div className='job_item_title'>
                <h5  className='job_item_text'>{props.job.title}</h5>
                <p className='job_item_text'>{props.job.description}</p>
                <Button onClick={props.click2} className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>View Proposals</Button>
            </div> 
            <div className='job_item_button'>
                <i class="fas fa-edit fa-lg" onClick={props.click3}></i>
                <div className='delete_icon'>
                <i class="fa fa-trash fa-lg" onClick={props.click1} ></i>
            </div>
            </div>
            </div> 
        </li>
        </>
    );
}

export default JobItems;