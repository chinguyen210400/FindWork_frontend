import React, { useState, useContext, createContext } from 'react';
import Footer from '../HomePage/Footer';
import { useEffect } from 'react';
import axios from 'axios'
import JobItems from './JobItems'
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import './Cards_findjob.css';
import Job_Modal from './Job_Modal';

function Cards_findjob_recent (jobList) {
    const [findJobItem,setFindJobItem] = useState([])
    const [loading, setloading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const [pageNumber, setPageNumber] = useState(0);
    const [jobItemModal, setjobItemModal] = useState({})
    // const value = {jobItemModal, setjobItemModal}
    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;
    const [searchInput, setsearchInput] = useState("")
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const token = localStorage.getItem("auth_token")
    const employee_id = localStorage.getItem("user_id")
    
    useEffect(() => {
        axios.get(`/api/employee/${employee_id}/jobs/recent`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
            setFindJobItem(res.data.job)
            console.log(res.data.job);
            // console.log(res.data.jobs)
            setloading(false)
        })
    },[])

    const handleSearchInput = e => {
        e.persist()
        setsearchInput(e.target.value)
        console.log(searchInput);
    }

    const searchSubmit = e => {
        e.preventDefault()
        const keyword = searchInput;
        if (keyword == ""){
            axios.get(`/api/job`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                setFindJobItem(res.data.jobs)
                console.log(res.data.jobs);
                // console.log(res.data.jobs)
                setloading(false)
            })
        }
        else {
            axios.get(`/api/job/search/${keyword}`,{headers : {"Authorization" : `Bearer ${token}`}}).then(res => {
                setFindJobItem(res.data.job)
                console.log(res.data.job);
                // console.log(res.data.jobs)
                setloading(false)  
            }).catch(err => {
                alert("Cannot find this job")
            })
        }
        
    }
    const pageCount = Math.ceil(findJobItem.length / itemPerPage);
    var findJobList;
    if (loading){
        return <h3> Loading </h3>
    } else {
            findJobList = findJobItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item) => {
            return (
                // <JobContext.Provider value = {value}>
                    <JobItems key = {item.id} job = {item} click1= {() => {setModalOpen(true); setjobItemModal(item)}} />
                // </JobContext.Provider>
            );
        })
    }

    return (
        <div className = "findjob_container">
        {
            modalOpen && <Job_Modal setOpenModal={setModalOpen} jobItem = {jobItemModal} />
        }
        <div className = "findjob_title">
            <div className ="findjob_title_icon" >Find Job</div>
            <div className="title_search"> 
                <div className='search_box'>
                    <form onSubmit={searchSubmit}>
                    <input className="textSearch_findjob" name ="searchInput" onChange = {handleSearchInput} placeholder="Search"/>
                    <button className="search_button" type = "submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="search_title">Advanced Search</div>
                <table className="list_title">
                    <thead>
                        <tr>
                            <th><h1>Most recent for you</h1></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        <div  className = 'findjob_body'>
        <div className='findjob_item'>
        <div className = 'list_left'> 
            <Link to = '/findjob_match' className='link-button'>
                <Button className='btns' buttonStyle='btn--findjob' buttonSize='btn--medium'>Best matches</Button>
            </Link>
            <Link to = '/findjob_recent' className='link-button'>
                <Button className='btns' buttonStyle='btn--findjob' buttonSize='btn--medium'>Most recent</Button>
            </Link>
           
            <Link to='/changeprofile'><Button className='btns' buttonStyle='btn--findjob' buttonSize='btn--medium'><i className="fa fa-user" aria-hidden="true"></i>View profile</Button></Link>
        </div>  
                {findJobList}
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

export default Cards_findjob_recent;