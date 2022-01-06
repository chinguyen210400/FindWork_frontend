import React, { useState ,useEffect } from "react";
import SkillsItems from "./SkillsItems"
import { Button } from "../Layouts/Button";
import "./JobSkill_Modal.css";
import axios from "axios";

function JobSkill_Modal(props) {
        const jobItem = props.job
        // console.log(jobItem);
        const [showSkills,setShowSkills] = useState(true);
        const [jobSkillList, setjobSkillList] = useState([]);
        const [skillList,setskillList] = useState([]);
        const [categoryList, setcategoryList] = useState([])
        const [skillInput, setskillInput] = useState({
            skill_id : '',
            level : '',
        })
        const [skillItem, setskillItem] = useState([])
        const token = localStorage.getItem("auth_token")
        const user_id = localStorage.getItem("user_id")
        const [loading, setloading] = useState(true)
        useEffect(() => {
            // const token = localStorage.getItem("auth_token")
            axios.get(`api/category`,{headers : {"Authorization" : `Bearer ${token}`}} ).then(res => {
                // console.log(res.data.categories);
                setcategoryList(res.data.categories);
           })
        }, [])

        useEffect(() => {
            axios.get(`api/job/${jobItem.id}/skills`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                console.log(res.data.jobSkills);
                setjobSkillList(res.data.jobSkills)
                setloading(false)
           }).catch(err => alert(err))
        }, [])

        console.log(jobSkillList);
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
            axios.post(`api/job/${jobItem.id}/skill`,skillInput,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                alert("Success\n")
                window.location.reload()
            }).catch(err => alert(err.message))
        }
        const deleteskillList = (item) => {
            const skillIndex = jobSkillList.indexOf(item)
            console.log(skillIndex);
            const newskillList = [...jobSkillList];
            if (window.confirm("Do you want to delete this skill") == true)
            {
                axios.delete(`/api/job/${jobItem.id}/skill/${item.skill.id}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                    alert('Delete success')
                })
                newskillList.splice(skillIndex,1)
                setjobSkillList(newskillList);
            }
        }

        const  skillsList = jobSkillList.map((item) => {
            return (
                <SkillsItems key={item.id} click={() => deleteskillList(item)}  skill={item} />
            );
            })
        function buildOptions() {
            var arr = []
            for (let i = 1; i <= 5; i++) {
                arr.push(<option key= {i} value={i} >{i}</option>)
            }
            return arr; 
        }

        return (
        <div className="jobskill_modalBackground">
          <div className="jobskill_modalContainer" role='dialog'>
            <div className="jobskill_titleCloseBtn">
              <button onClick={() => {props.setOpenModal(false);}}>X</button>
            </div>
        <div className="jobskillmodal_header">
            <h1>Skill List</h1>
        </div>
        {loading ? <h5>Loading </h5> : 
          <div className="jobskill_body">
          <div className="jobskill_list">
            { 
                skillsList
            }
            </div>
            <div className="jobadd_skill">
                <label className="jobskill_label"><p>Select Category</p></label>
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
                    <label className="jobskill_label"><p>Select Skill</p></label>
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
                    <label className="jobskill_label"><p>Select Level</p></label>
                    <select name ="level"  value = {skillInput.level} onChange = {handleSkillInput} className ="form-control">
                        <option> Select Level</option>
                        {
                            buildOptions()
                        }
                    </select>  
                    <div className="jobskill_button">
                <button onClick={submitAddSkill}>+ Add Skill</button>
                </div>
            </div>
        </div>
        }
      
        {/* <div className="footer">
            <button>Save</button>
        </div> */}
      </div>
        </div>
    );
}

export default JobSkill_Modal;