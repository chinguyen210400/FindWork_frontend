import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import StarRatings from "react-star-ratings";
import './Cards_findwork'
import WorkContext from '../pages/findwork'
function WorkItems (props) {
    // const { workItemModal, setworkItemModal} = useContext(WorkContext);

    // function handleClick(e) {
    //     e.persist()
    //     props.click1()
    //     setworkItemModal(props.work);
    // }
    return (
        <>
        <li className='jobs_item'>
            <div className='work_item_info'>
            <div className='work_item_title' onClick={props.click1} >
                <h5  className='work_item_text'>{props.work.title}</h5>
                <p className='work_item_text'>{props.work.description}</p>
                <div className='rating_star'>
                 {/* <StarRatings rating={props.work.id} starDimension="25px" starSpacing="2px" /> */}
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