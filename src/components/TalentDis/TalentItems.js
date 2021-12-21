import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";

function TalentItems (props) {
    return (
        <>
        <li className='jobs_item'>
            <div className='talent_item_info'>
            <div className='talent_item_title' onClick={props.click1}>
                <h5  className='talent_item_text'>{props.text1}</h5>
                <p className='talent_item_text'>{props.text2}</p> 
                <p className='talent_item_text'><i class="fa fa-star" aria-hidden="true"></i></p>
            </div> 
            <div className='talent_item_button'>
                <img src="/images/talent1.jpg" alt = "work's market" width="100" height="100"/>
            </div>
            </div> 
        </li>
        </>
    );
}

export default TalentItems;
