import '../../App.css';
import React, { useState } from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Footer from '../HomePage/Footer';
import Cards_findwork from '../FindWork/Cards_findwork';
import { useEffect } from 'react';
import Test from '../FindWork/Test';
import axios from 'axios'
import WorkItems from '../FindWork/WorkItems';
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import '../FindWork/Cards_findwork.css';


function FindWork() {
    const [findWorkItem,setFindWorkItem] = useState([])
    const [loading, setloading] = useState(true)

    const [pageNumber, setPageNumber] = useState(0);
    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recent_work`).then(res => {
            if (res.data.status === 200){
                setFindWorkItem(res.data.job)
                console.log(res.data.job)
            }
            setloading(false)
        })

    },[])

    const pageCount = Math.ceil(findWorkItem.length / itemPerPage);
    var findWorkList;
    if (loading){
        return <h3> Loading </h3>
    } else {
            findWorkList = findWorkItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item) => {
            return (
                <WorkItems key = {item.id} work = {item} />
            );
        })
    }
    return(
        <>
            <Navbar_myjobs />
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
            <Footer />
        </>
    );
}

export default FindWork;