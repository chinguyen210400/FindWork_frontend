import React, { useState ,useEffect } from "react";
import SkillsItems from "./SkillsItems";
import { Button } from "../Layouts/Button";
import "./Skills_Modal.css";
import axios from "axios";

function Skills_Modal(props) {
        const [showSkills,setShowSkills] = useState(true);
        const [employeeSkillList, setemployeeSkillList] = useState(props.skillList)
        console.log(employeeSkillList);
        const [skillList,setskillList] = useState([]);
        const [categoryList, setcategoryList] = useState([])
        const [skillInput, setskillInput] = useState({
            skill_id : '',
            level : '',
            years_of_experience : ''

        })
        const [skillItem, setskillItem] = useState([])
        const token = localStorage.getItem("auth_token")
        const user_id = localStorage.getItem("user_id")
        useEffect(() => {
            // const token = localStorage.getItem("auth_token")
            axios.get(`api/category`,{headers : {"Authorization" : `Bearer ${token}`}} ).then(res => {
                console.log(res.data.categories);
                setcategoryList(res.data.categories);
           })

        //    axios.get(`api/employee/${employee}/skills`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {

        //    })
        }, [])


        function handleCategoryInput(e) {
            e.persist()
            let categoryId = e.target.value
            axios.get(`api/category/${categoryId}/skills`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                setskillList(res.data.skills)
                console.log(res.data.skills);
            })
          }

        function handleSkillInput(e) {
            e.persist()
            setskillInput({...skillInput, [e.target.name]: e.target.value})
            console.log(skillInput);

        }
        function submitAddSkill(e){
            e.persist()
            console.log(user_id);
            axios.post(`api/employee/${user_id}/skill`,skillInput,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                alert("Success\n")
            })
        }
        const deleteskillList = (item) => {
            const skillIndex = employeeSkillList.indexOf(item)
            console.log(skillIndex);
            const newskillList = [...employeeSkillList]
            const skillID = item.skill.skill.id
            if (window.confirm("Do you want to delete this skill") == true)
            {
                axios.delete(`/api/employee/${user_id}/skill/${skillID}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                    alert('Delete success')
                })
                newskillList.splice(skillIndex,1)
                setemployeeSkillList(newskillList)
            }
        }
        const  skillsList = employeeSkillList.map((item) => {
            return (
                <SkillsItems key={item.skillName} click={() => deleteskillList(item )}  text={item.skillName} />
            );
            })
        function buildOptions() {
            var arr = []
            for (let i = 1; i <= 5; i++) {
                arr.push(<option key= {i} value={i} >{i}</option>)
            }
            return arr; 
        }
        function buildOptions2() {
            var arr = []
            for (let i = 1; i <= 50; i++) {
                arr.push(<option key={i} value= {i}>{i}</option>)
            }
            return arr; 
        }

        return (
        <div className="skill_modalBackground">
          <div className="skill_modalContainer" role='dialog'>
            <div className="skill_titleCloseBtn">
              <button onClick={() => {props.setOpenModal(false); window.location.reload()}}>X</button>
            </div>
        <div className="skillmodal_header">
            <h1>Skill List</h1>
        </div>
        <div className="skill_body">
          <div className="skill_list">
            {skillsList}
            </div>
            <div className="add_skill">
                <label className="skill_label"><p>Select Category</p></label>
                    <select name ="category_id" onChange={handleCategoryInput} value = {categoryList.id} className ="form-control">
                        <option> Select category</option>
                        {
                            categoryList.map ( (item) => {
                                return (
                                        <option value = {item.id} key = {item.id}> {item.name}</option>
                                )
                            })
                        }
                    </select>   
                    <label className="skill_label"><p>Select Skill</p></label>
                    <select name ="skill_id"  value = {skillInput.id} onChange = {handleSkillInput} className ="form-control">
                        <option> Select skill</option>
                        {
                            skillList.map ( (item) => {
                                return (
                                        <option value = {item.id} key = {item.id}> {item.name}</option>
                                )
                            })
                        }
                    </select> 
                    <label className="skill_label"><p>Select Level</p></label>
                    <select name ="level"  value = {skillInput.level} onChange = {handleSkillInput} className ="form-control">
                        <option> Select Level</option>
                        {
                            buildOptions()
                        }
                    </select>  
                    <label className="skill_label"><p>Select Year of Experience</p></label>
                    <select name ="years_of_experience"  value = {skillInput.years_of_experience} onChange = {handleSkillInput} className ="form-control">
                        <option> Select Level</option>
                        {
                            buildOptions2()
                        }
                    </select>   
                    <div className="skill_button">
                <button onClick={submitAddSkill} >+ Add Skill</button>
                </div>
            </div>
        </div>
        <div className="skill_footer">
            <button>Save</button>
        </div>
      </div>
    </div>
    );
}

export default Skills_Modal;