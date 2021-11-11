import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import './Cards_myjobs';

function JobItems (props) {
    
    return (
        <>
        <li className='jobs_item'>
            <div className='job_item_info'>
                <div className='job_item_title'>
                <h5  className='job_item_text'>{props.text1}</h5>
                <p className='job_item_text'>{props.text2}</p>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>Rating</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>Report</Button>
            </div> 
            <div className='job_item_button' >
                 <Button onClick={props.click2} className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>View</Button>     
                 <Button onClick={props.click1} className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>{props.text3}</Button>
                 
            </div>
               
            </div> 
        </li>
        </>
    );
}

export default JobItems;