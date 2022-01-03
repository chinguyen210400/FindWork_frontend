import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./TalentItems.css";

function TalentItems (props) {
    return (
        <>
        <li className='talent_item'>
            <div className='talent_item_info'>
            <div className='talent_item_image'>
                <img src={props.url} className="talent_item_img" width="200" height="200"/>
            </div>
            <div className='talent_item_title'  onClick={props.click1}>
                <h5  className='talent_item_text'>{props.name}</h5>
                <p className='talent_item_text'>{props.description}</p> 
                <p className='talent_item_text'><i class="fa fa-star" aria-hidden="true"></i></p>
            </div> 
            </div> 
        </li>
        </>
    
    );
}

export default TalentItems;
