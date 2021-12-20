import React, {useState} from "react";
import ReactPaginate from "react-paginate";
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import './Cards_findwork.css';
import WorkItems from './WorkItems';
import Work_Modal from "./Work_Modal";

function Cards_findwork () {
    const [modalOpen, setModalOpen] = useState(false);
    const [findWorkItem,setFindWorkItem] = useState([
        {text1: "Job 1", text2: "Development",number:2},
        {text1: "Job 1", text2: "Development",number:5},
        {text1: "Job 1", text2: "Development",number:4},
        {text1: "Job 1", text2: "Development",number:4.6},
    ])

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(findWorkItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const findWorkList = findWorkItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
        return (
            <WorkItems text1={item.text1} text2={item.text2} number={item.number} click1={() => {setModalOpen(true);}}/>
        );
    }
)
    return (
        <div className = "findwork_container">
            {modalOpen && <Work_Modal setOpenModal={setModalOpen} />}
        <div className = "findwork_title">
            <div className ="findwork_title_icon" >Find Work</div>
            <div className="title_search"> 
                <div className='search_box'><input className="textSearch_findwork" placeholder="Search"/><button className="search_button"><i class="fa fa-search"></i></button></div>
                <div className="search_title">Advanced Search</div>
                <table className="list_title">
                        <th><h1>Most recent for you</h1></th>
                </table>
            </div>
        </div>
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div className = 'list_left'> 
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-snowflake-o" aria-hidden="true"></i>Best matches</Button>
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-clock-o" aria-hidden="true"></i>Most recent</Button>
            <Link to='/changeprofile'><Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-user" aria-hidden="true"></i>View profile</Button></Link>
        </div>  
                {findWorkList}
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

export default Cards_findwork;