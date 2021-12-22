import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import "./Postjob_Modal.css";
import { useEffect , useState} from "react";
import axios from "axios";
function Postjob_Modal(props) {
    const [categoryList, setcategoryList] = useState([])
    const [skillList,setskillList] = useState([]);
    const token = localStorage.getItem("auth_token")

    useEffect(() => {
        // const token = localStorage.getItem("auth_token")
        axios.get(`api/category`,{headers : {"Authorization" : `Bearer ${token}`}} ).then(res => {
            console.log(res.data.categories);
            setcategoryList(res.data.categories);
        })
    })

    return (
        <div className="postjob_modalBackground" >
        <div className="postjob_modalContainer"  >
        <div className="postjob_titleCloseBtn">
        <Link className="fa fa-close fa-2x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div className="postjob_container" role='dialog'>
            <div className="postjob_title">
            <div className="postjob_button">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--mini'>Submit</Button> 
                </div>
                <h2>Post a new job now</h2>
                
            </div>
            <div className="postjob_header">
                <div className="postjob_header_title">
                    <h6>Title</h6>
                </div>
                <div className="postjob_header_input">
                    <input className="headline_textInput" type="text" name="title" placeholder=""/>
                </div>
            </div>
            <div className="postjob_body">
                <div className="postjob_describe">
                <div className="postjob_describe_title">
                    <h6>Describe your job</h6>
                </div>
                <div className="postjob_describe_input">
                <textarea className="describe_textInput" type="textarea" name="description" placeholder="Have a job description ?"/>
                </div>
                </div>
                
                <div className="postjob_element">
                <div className="postjob_body_title">
                    <h6>Skills</h6>
                </div>
                <div className="postjob_body_input">
                <input className="skill_textInput" type="text" name="skill" placeholder=""/>
                </div>
                <div className="postjob_body_title">
                    <h6>Budget</h6>
                </div>
                <div className="postjob_body_input">
                    <input className="budget_textInput" type="text" name="skill" placeholder=""/>
                </div>
                </div>

            </div>
        </div>
      </div>
    </div>
    );
}

export default Postjob_Modal;