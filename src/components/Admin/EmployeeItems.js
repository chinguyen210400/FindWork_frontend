import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./EmployeeItems.css";

function EmployeeItems (props) {
    return (
        <>
        <li className='employee_item'>
            <div className='employee_item_info'>
            <div className='employee_item_image'>
                <img src={props.url} className="employee_item_img" width="200" height="200"/>
            </div>
            <div className='employee_item_title'  onClick={props.click1} >
                <h5  className='employee_item_text'>{props.name}</h5>
                <p className='employee_item_text'>{props.overview}</p> 
            </div> 
            <div className="employee_button">
                <Button className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>Block</Button>
                <Button className='btns' buttonStyle='btn--white' buttonSize='btn--medium' onClick={props.click1}>View</Button>
            </div>
            </div> 
        </li>
        </>
    
    );
}

export default EmployeeItems;
