import React, {useState} from "react";
import '../../App.css';
import'./Cards_myjobs.css';
import { Button } from "../Layouts/Button";
import JobItems from "./JobItems";
import Job_Modal from "./Job_Modal";
import ReactPaginate from "react-paginate";

function Cards_myjobs () {
    const [modalOpen, setModalOpen] = useState(false);
    const [jobItem,setJobItem] = useState([
        {text1: "Job 1", text2: "Development", text3: "Declined"},
        {text1: "Job 1", text2: "Development", text3: "Declined"},
        {text1: "Job 1", text2: "Development", text3: "Declined"},
        {text1: "Job 1", text2: "Development", text3: "Declined"},
    ])

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(jobItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const deleteJobItem = (jobIndex) => {
        console.log(jobIndex);
        const newjobItem = [...jobItem];
        newjobItem.splice(jobIndex,1);
        setJobItem(newjobItem);
    }

    const  jobsList = jobItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
                    return (
                        <JobItems key={index} click1={() => deleteJobItem(index)} click2={() => {setModalOpen(true);}} text1={item.text1} text2={item.text2} text3={item.text3} />
                    );
                }
    )
    
    return(
        <div className = "findwork_container">
            {modalOpen && <Job_Modal setOpenModal={setModalOpen} />}
        <div className = "findwork_title">
            <div className ="findwork_title_icon" >My Jobs</div>
            <div className="title_search"> 
                <div className='search_box'><input className="textSearch_findwork" placeholder="Search"/><button className="search_button"><i class="fa fa-search"></i></button></div>
                <div className="search_title">Advanced Search</div>
            </div>
        </div>
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div className = 'list_left'> 
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

export default Cards_myjobs;