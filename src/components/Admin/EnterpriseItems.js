import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./EnterpriseItems.css";

function EnterpriseItems (props) {
    const talentInfo = props.talentInfo
    return (
        <>
        <li className='enterprise_item'>
            <div className='enterprise_item_info'>
            <div className='enterprise_item_image'>
                <img src={props.url} className="enterprise_item_img" width="200" height="200"/>
            </div>
            <div className='enterprise_item_title' >
                <h5  className='enterprise_item_text'>{props.text1}</h5>
                <p className='enterprise_item_text'>{props.text2}</p> 
            </div> 
            <div className="enterprise_button">
                <Button className='btns' buttonStyle='btn--noti' buttonSize='btn--medium'>Block</Button>
                <Button className='btns' buttonStyle='btn--white' buttonSize='btn--medium'  onClick={props.click1}>View</Button>
            </div>
            </div> 
        </li>
        </>
    
    );
}

export default EnterpriseItems;
