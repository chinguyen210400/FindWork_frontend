import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";

function SkillsItems_profile (props) {
    return (
        <div className="skillsitems_profile_container" >
            <div className="skillsitems_profile_title">
                {props.skill.skillName}
            </div>
        </div>
    );
}

export default SkillsItems_profile;