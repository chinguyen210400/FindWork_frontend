import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import './Cards_findwork.css';
import WorkItems from './WorkItems'

function Cards_findwork (workList) {
    const [findWorkItem,setFindWorkItem] = useState([
        {text1: "Job 1", text2: "Development",number:2},
        {text1: "Job 1", text2: "Development",number:5},
        {text1: "Job 1", text2: "Development",number:4},
        {text1: "Job 1", text2: "Development",number:4.6},
    ])

    // useEffect(() => {
    //     setFindWorkItem(workList);
    // }, [workList])
    

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(findWorkItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const findWorkList = findWorkItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
        return (
            <WorkItems key = {index} text1={item.text1} text2={item.text2} number={item.number}/>
        );
    })

    return (
        <div className = "findwork_container">
        <div className = "findwork_title">
            <div className ="findwork_title_icon" >Find Work</div>
            <div className="title_search"> 
                <div className='search_box'><input className="textSearch_findwork" placeholder="Search"/><button className="search_button"><i className="fa fa-search"></i></button></div>
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
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div className = 'list_left'> 
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'>Best matches</Button>
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'>Most recent</Button>
            <Link to='/changeprofile'><Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i className="fa fa-user" aria-hidden="true"></i>View profile</Button></Link>
        </div>  
                {findWorkList}
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

export default Cards_findwork;