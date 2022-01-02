import React, { useState ,useEffect } from "react";
import SkillsItems from "../UserProfile/SkillsItems";
import { Button } from "../Layouts/Button";
import "../UserProfile/Skills_Modal.css"
import axios from "axios";

function JobSkill_Modal(props) {
        const jobItem = props.job
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
            }).catch(err => alert(err.message))
        }
        const deleteskillList = (skillIndex) => {
            console.log(skillIndex);
            const newskillList = [...skillList];
            newskillList.splice(skillIndex,1);
            setskillList(newskillList);
        }

        // const  skillsList = jobSkillList.map((item) => {
        //     return (
        //         <SkillsItems key={item.id} click={() => deleteskillList(item.id)}  skill={item} />
        //     );
        //     })
        function buildOptions() {
            var arr = []
            for (let i = 1; i <= 5; i++) {
                arr.push(<option key= {i} value={i} >{i}</option>)
            }
            return arr; 
        }

        return (
        <div className="skill_modalBackground">
          <div className="skill_modalContainer">
            <div className="skill_titleCloseBtn">
              <button onClick={() => {props.setOpenModal(false);}}>X</button>
            </div>
        <div className="skillmodal_header">
            <h1>Skill List</h1>
        </div>
        {loading ? <h5>Loading </h5> : 
          <div className="body">
          <div className="skill_list">
            { jobSkillList.map((item) => {
            return (
                <SkillsItems key={item.id} click={() => deleteskillList(item.id)}  skill={item} />
            )})
            }
            </div>
            <div className="add_skill">
                <label>Select Category</label>
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
                    <label>Select Skill</label>
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
                    <label>Select Level</label>
                    <select name ="level"  value = {skillInput.level} onChange = {handleSkillInput} className ="form-control">
                        <option> Select Level</option>
                        {
                            buildOptions()
                        }
                    </select>  
                <button onClick={submitAddSkill}>+ Add Skill</button>
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