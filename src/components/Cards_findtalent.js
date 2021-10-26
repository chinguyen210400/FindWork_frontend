import React, {useState} from "react";
import '../App.css';
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
        <div  className ="findtalent_container">
        <div className = "findtalent_title">
            <h1>Work</h1>
            <ul className='work_item'>
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
            </ul>
        </div>
    </div>
    );
}

export default Cards_findtalent;