import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./SkillsItems.css"

function SkillsItems (props) {
    return (
        <div className="skillsitems_container" >
            <div className="skillsitems_button">
                <i class="fa fa-minus fa-0.5x" aria-hidden="true" onClick={props.click}></i>
            </div>
            <div className="skillsitems_title">
                {props.skill.skill_id}
            </div>

        </div>
    );
}

export default SkillsItems;