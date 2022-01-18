import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Postjob_Modal.css";
import { useEffect , useState} from "react";
import axios from "axios";
function EditJob_Modal(props) {
    const token = localStorage.getItem("auth_token")
    const user_id = localStorage.getItem("user_id")
    const [jobInput, setjobInput] = useState({})
    const [loading, setloading] = useState(true)

    console.log(props.job);
    useEffect(() => {
        axios.get(`/api/job/${props.job.id}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            console.log(res.data.job);
            setjobInput(res.data.job)
            setloading(false)
        })
    }, [])
    function handleInput(e) {
        e.persist()
        setjobInput({...jobInput, [e.target.name] : e.target.value})
        console.log(jobInput);
    }

    function submitPostJob(e){
        e.preventDefault()
        const data = jobInput
        axios.patch(`/api/job/${props.job.id}`,data,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            alert("Update success \n");
            window.location.reload()
           // <Link to = '/findtalent'></Link>
        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div className="postjob_modalBackground" >
        <div className="postjob_modalContainer"  role='dialog'>
        <div className="postjob_titleCloseBtn">
        <Link className="fa fa-close fa-2x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div className="postjob_container">
            <form className="postJobForm" onSubmit = {submitPostJob}>
            <div className="postjob_title">
            <div className="postjob_button">
                <Button className='btns' type = "submit"  buttonStyle='btn--outline' buttonSize='btn--mini'>Submit</Button> 
                </div>
                <h2>Edit Job</h2>
                
            </div>
            {
                loading ? 
                <h5>Loading</h5>
                :
                <>
                <div className="postjob_header">
                    <div className="postjob_header_title">
                        <h6>Title</h6>
                    </div>
                    <div className="postjob_header_input">
                        <input className="headline_textInput" type="text" name="title" value ={jobInput.title} onChange = {handleInput} placeholder=""/>
                    </div>
                </div>
                <div className="postjob_body">
                    <div className="postjob_describe">
                    <div className="postjob_describe_title">
                        <h6>Describe your job</h6>
                    </div>
                    <div className="postjob_describe_input">
                    <textarea className="describe_textInput" type="textarea" onChange = {handleInput}name="description" value ={jobInput.description}placeholder="Have a job description ?"/>
                    </div>
                    </div>
                    
                    <div className="postjob_element">
                    
                    <div className="postjob_body_title">
                        <h6>Salary</h6>
                    </div>
                    <div className="postjob_body_input">
                        <input className="budget_textInput" type="text" onChange = {handleInput} name="salary" value ={jobInput.salary} placeholder=""/>
                    </div>
                    </div>
                    <div className="postjob_element">
                    <div className="postjob_body_title">
                        <h6>Number of employee</h6>
                    </div>
                    <div className="postjob_body_input">
                        <input className="budget_textInput" onChange = {handleInput} type="text" name="number_of_employees" value ={jobInput.number_of_employees} placeholder=""/>
                    </div>
                    </div>
                    <div className="postjob_element">
                    <div className="postjob_body_title">
                        <h6>Location</h6>
                    </div>
                    <div className="postjob_body_input">
                        <input className="budget_textInput" onChange = {handleInput} type="text" name="location" value ={jobInput.location} placeholder=""/>
                    </div>
                    </div>
                    <div className="postjob_element">
                    <div className="postjob_body_title">
                        <h6>Type</h6>
                    </div>
                    <div className="postjob_body_input">
                    <select name ="type" onChange = {handleInput} value ={jobInput.type} class="form-select" aria-label="Default select example">
                        <option selected>Job Type</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                    </select>
                    </div>
                    </div>
                </div>
                </>
            }
           
            
            </form>
        </div>
      </div>
    </div>
    );
}

export default EditJob_Modal;