import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import StarRatings from "react-star-ratings";
import './Cards_findwork'

function WorkItems (props) {

    return (
        <>
        <li className='jobs_item'>
            <div className='work_item_info'>
            <div className='work_item_title'>
                <h5  className='work_item_text'>{props.work.name}</h5>
                <p className='work_item_text'>{props.work.description}</p>
                <div className='rating_star'>
                   
                 <StarRatings rating={props.work.id} starDimension="25px" starSpacing="2px" />
                </div>
            </div> 
                <div className='work_item_button'>
                    <i className="fa fa-bookmark fa-2x"></i>
                </div>
            </div>
        </li>
        </>
    );
}

export default WorkItems;