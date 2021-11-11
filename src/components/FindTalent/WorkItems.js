import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import './Cards_findtalent';

function WorkItems (props) {

    return (
        <>
        <li className='jobs_item'>
            <div className='work_item_info'>
            <div className='work_item_title'>
                <h5  className='work_item_text'>{props.text1}</h5>
                <p className='work_item_text'>{props.text2}</p>
                <Button onClick={props.click2} className='btns' buttonStyle='btn--primary' buttonSize='btn--medium'>View Proposals</Button>
            </div> 
            <div className='work_item_button'>
                <i class="fas fa-edit fa-lg"></i>
                <div className='delete_icon'>
                <i class="fa fa-trash fa-lg" onClick={props.click1} ></i>
            </div>
            </div>
            </div> 
        </li>
        </>
    );
}

export default WorkItems;