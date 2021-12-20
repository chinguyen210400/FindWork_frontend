import React, { useState } from "react";
import SkillsItems from "./SkillsItems";
import { Button } from "../Layouts/Button";
import "./Skills_Modal.css";

function Skills_Modal({ setOpenModal }) {
        const [showSkills,setShowSkills] = useState(true);
        const [skillItem,setSkillItem] = useState([
            {text: "Digital Marketing"},
            {text: "Ruby on Rails Developer"},
            {text: "Mobile App Developer"},
            {text: "Social Media Manager"},
            
        ]);

        const deleteSkillItem = (skillIndex) => {
            console.log(skillIndex);
            const newSkillItem = [...skillItem];
            newSkillItem.splice(skillIndex,1);
            setSkillItem(newSkillItem);
        }

        const  skillsList =skillItem.map((item,index) => {
            return (
                <SkillsItems key={index} click={() => deleteSkillItem(index)}  text={item.text} />
            );
        }
)
        return (
        <div className="skill_modalBackground">
          <div className="skill_modalContainer">
            <div className="skill_titleCloseBtn">
              <button onClick={() => {setOpenModal(false);}}>X</button>
            </div>
        <div className="skillmodal_header">
            <h1>Skill List</h1>
        </div>
        <div className="body">
          <div className="skill_list">
            {skillsList}
            </div>
            <div className="add_skill">
                <input className="contact_textInput" type="text" name="address" placeholder="Add Skill"/> 
                <button>+ Add Skill</button>
            </div>
        </div>
        <div className="footer">
            <button>Save</button>
        </div>
      </div>
    </div>
    );
}

export default Skills_Modal;