import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import StarRatings from "react-star-ratings";
import './Cards_findjob'
import JobContext from '../pages/findjob.js'
function JobItems (props) {
    // const { jobItemModal, setjobItemModal} = useContext(JobContext);

    // function handleClick(e) {
    //     e.persist()
    //     props.click1()
    //     setjobItemModal(props.job);
    // }
    return (
        <>
        <li className='jobs_item'>
            <div className='job_item_info'>
            <div className='job_item_title' onClick={props.click1} >
                <h5  className='job_item_text'>{props.job.title}</h5>
                <p className='job_item_text'>{props.job.description}</p>
                <div className='rating_star'>
                {/* <StarRatings rating={props.job.id} starDimension="25px" starSpacing="2px" /> */}
                </div>
            </div> 
                <div className='job_item_button'>
                    <i className="fa fa-bookmark fa-2x"></i>
                </div>
            </div>
        </li>
        </>
    );
}

export default JobItems;