import React, {useState} from "react";
import '../App.css';
import'./Cards_myjobs.css';
import JobItems from "./JobItems";
import Modal from "./Modal";
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
    <div  className ="myjobs_container">
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <div className = "myjobs_title">
            <h1>My Jobs</h1>
            <ul className='job_item'>
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
            </ul>
        </div>
    </div>
    );
}

export default Cards_myjobs;