import React, {useEffect, useState} from "react";
import '../../App.css';
import'./Cards_myjobs.css';
import { Button } from "../Layouts/Button";
import JobItems from "./JobItems";
import Job_Modal from "./Job_Modal";
import ReactPaginate from "react-paginate";
import axios from "axios";

function Cards_myjobs () {
    const [modalOpen, setModalOpen] = useState(false);
    const [jobItem,setJobItem] = useState([])
    const [jobItemModal, setjobItemModal] = useState({})
    const [loading, setloading] = useState(true)
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("auth_token")

    const [pageNumber, setPageNumber] = useState(0);
    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        // console.log(user_id);
       axios.get(`/api/employee/${user_id}/jobs`, {headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            // setJobItem(res.data.employeeJobs)
            const employeeJob = res.data.employeeJobs
            setJobItem(employeeJob)
            console.log(employeeJob);
            setloading(false)
       })
    }, [])

   

    const pageCount = Math.ceil(jobItem.length / itemPerPage);
    const deleteJobItem = (jobIndex) => {
        console.log(jobIndex);
        const newjobItem = [...jobItem];
        newjobItem.splice(jobIndex,1);
        setJobItem(newjobItem);
    }
    var jobsList
    if (loading)
    return (
        <h4>Loading</h4>
    )
    else{
        jobsList = jobItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item) => {
            return (
                <JobItems key={item.id} click1={() => deleteJobItem(item.id)} click2={() => {setModalOpen(true); setjobItemModal(item) }} job = {item} />
            );
    })
    }
       
    return(
        <div className = "findwork_container">
            {modalOpen && <Job_Modal setOpenModal={setModalOpen} jobItem = {jobItemModal} />}
        <div className = "findwork_title">
            <div className ="findwork_title_icon" >My Jobs</div>
            <div className="title_search"> 
                <div className='search_box'><input className="textSearch_findwork" placeholder="Search"/><button className="search_button"><i className="fa fa-search"></i></button></div>
                <div className="search_title">Advanced Search</div>
            </div>
        </div>
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div className = 'list_left'> 
        </div>  
                {jobsList}
                <ReactPaginate 
                    previousLabel={<i className="fa fa-chevron-left" aria-hidden="true"></i>}
                    nextLabel={<i className="fa fa-chevron-right" aria-hidden="true"></i>}
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

export default Cards_myjobs;