import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import'./Cards_findtalent.css';
import WorkItems from "./WorkItems";
import ReactPaginate from "react-paginate";

function Cards_findtalent () {
    const [workItem,setWorkItem] = useState([
        {text1: "Job 1", text2: "Development"},
        {text1: "Job 1", text2: "Development"},
        {text1: "Job 1", text2: "Development"},
        {text1: "Job 1", text2: "Development"},
    ])

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(workItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    
    const deleteWorkItem = (workIndex) => {
        console.log(workIndex);
        const newWorkItem = [...workItem];
        newWorkItem.splice(workIndex,1);
        setWorkItem(newWorkItem);
    }

    const  worksList = workItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
                    return (
                        <WorkItems key={index} click1={() => deleteWorkItem(index)} text1={item.text1} text2={item.text2} />
                    );
                }
    )
   
    return (
        <div className = "findwork_container">
        <div className = "findwork_title">
            <div className ="findwork_title_icon" >Job Posting</div>
            <div className="title_search"> 
                <div className='search_box'><input className="textSearch_findwork" placeholder="Search jobs posting"/><button className="search_button"><i class="fa fa-search"></i></button></div>
                <div className="search_title">Advanced Search</div>
                <table className="list_title">
                        <th><h1>Uploaded Jobs</h1></th>
                        <div className='post_button'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'><i class="fa fa-plus" aria-hidden="true"></i>Post a New Job</Button></div>
                </table>
            </div>
        </div>
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div className = 'list_left'> 
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'>Most recent</Button>
            <Link to ='/enterpriseprofile'><Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-briefcase " aria-hidden="true"></i>View profile</Button></Link>
        </div>  
                {worksList}
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