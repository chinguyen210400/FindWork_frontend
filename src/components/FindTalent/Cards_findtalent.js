import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import'./Cards_findtalent.css';
import JobItems from "./JobItems";
import ReactPaginate from "react-paginate";
import Postjob_Modal from "./Postjob_Modal";
import Proposal_Modal from "./Proposal_Modal";
import axios from 'axios'
import JobSkill_Modal from "./JobSkill_Modal";
import Skills_Modal from "../UserProfile/Skills_Modal";
function Cards_findtalent () {

    const [postJobModalOpen, setPostJobModalOpen] = useState(false);
    const [proposalModalOpen, setProposalModalOpen] = useState(false);
    const [skillModalOpen, setskillModalOpen] = useState(false)
    const [enterpriseJobList, setenterpriseJobList] = useState([])
    const [loading, setloading] = useState(true)
    const [pageNumber, setPageNumber] = useState(0);
    const [jobItemModal, setjobItemModal] = useState({})
    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const token = localStorage.getItem("auth_token")
    const enterprise_id = localStorage.getItem("user_id")
    useEffect(() => {
        axios.get(`/api/enterprise/${enterprise_id}/jobs`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            setenterpriseJobList(res.data.jobs);
            // console.log(res.data.jobs)
            setloading(false)
        })
        

    },[])
    const deleteJobItem = (item) => {
        const jobIndex = enterpriseJobList.indexOf(item)
        const newJobItem = [...enterpriseJobList];
        const job_id = item.id
        if (window.confirm("Do you want to delete this job") == true){
            axios.delete(`/api/job/${job_id}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                alert("Delete success");
                window.location.reload()
            }).catch(err => {
                alert("Cannot delete");
            })
        }
        // newJobItem.splice(jobIndex,1);
        // setenterpriseJobList(newJobItem);
    }
    const pageCount = Math.ceil(enterpriseJobList.length / itemPerPage);
    var jobsList;
    if (loading){
        return <h3> Loading </h3>
    } else {
        jobsList = enterpriseJobList.slice(pagesVisited, pagesVisited + itemPerPage).map((item) => {
            return (
                <JobItems key={item.id} click1={() => deleteJobItem(item)} job = {item} click2={() => {setProposalModalOpen(true); setjobItemModal(item)}} 
                click3 = {() => {setskillModalOpen(true);  setjobItemModal(item)}}/>
            );
        })
    }
   
    return (
        <div className = "findjob_container">
              {postJobModalOpen && <Postjob_Modal setOpenModal={setPostJobModalOpen} />}
              {proposalModalOpen && <Proposal_Modal setOpenModal={setProposalModalOpen} 
              job = {jobItemModal}/>}
              {skillModalOpen && <JobSkill_Modal setOpenModal = {setskillModalOpen} 
              job = {jobItemModal}></JobSkill_Modal>}
        <div className = "findjob_title">
            <div className ="findjob_title_icon" >Job Posting</div>
            <div className="title_search"> 
                <div className='search_box'><input className="textSearch_findjob" placeholder="Search jobs posting"/><button className="search_button"><i class="fa fa-search"></i></button></div>
                <div className="search_title">Advanced Search</div>
                <table className="list_title">
                        <th><h1>Uploaded Jobs</h1></th>
                        <div className='post_button'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={() => {setPostJobModalOpen(true);}}><i class="fa fa-plus" aria-hidden="true"></i>Post a New Job</Button></div>
                </table>
            </div>
        </div>
        <div  className = 'findjob_body'>
        <div className='findjob_item'>
        <div className = 'list_left'> 
            <Button className='btns' buttonStyle='btn--findjob' buttonSize='btn--medium'><i class="fa fa-clock-o" aria-hidden="true"></i>Most recent</Button>
            <Link to ='/enterpriseprofile' className = "link"><Button className='btns' buttonStyle='btn--findjob' buttonSize='btn--medium'><i class="fa fa-briefcase " aria-hidden="true"></i>View profile</Button></Link>
        </div>  
                {jobsList}
                <ReactPaginate 
                    previousLabel={<i class="fa fa-chevron-left" aria-hidden="true"></i>}
                    nextLabel={<i class="fa fa-chevron-right" aria-hidden="true"></i>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                /> 
        </div>   
        </div>  
        </div>
    );
}

export default Cards_findtalent;