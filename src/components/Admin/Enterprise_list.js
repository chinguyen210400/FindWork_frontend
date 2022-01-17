import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import EnterpriseItems from "./EnterpriseItems";
import ReactPaginate from "react-paginate";
import '../TalentDis/Cards_talentdis.css';
import axios from "axios";

function Enterprise_list () {
    const token = localStorage.getItem("auth_token")

    const [enterpriseItem,setEnterpriseItem] = useState([
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
        {text1:'Chi Nguyen',text2:'This is a list of talent'},
    ])

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 6;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(enterpriseItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const  enterprisesList = enterpriseItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
                    return (
                        <EnterpriseItems key={index} />
                    );
                }
    )
   
    return (
        <div className = "talent_container">
        <div className = "findjob_title">
            <div className="title_search">     
                <div className="talent_list_title">
                    <div className="talent_list_title_left">
                            <h1>Enterprise</h1>
                    </div>
                       
                </div>
            </div>
        </div>
        <div  className = 'findjob_body'>
        <div className='findjob_item'>
        <div class = "admin_list_right">
        
        {enterprisesList}
        </div>

        <div className="talent_pagi">
        <ReactPaginate 
            previousLabel={<i class="fa fa-chevron-left" aria-hidden="true"></i>}
            nextLabel={<i class="fa fa-chevron-right" aria-hidden="true"></i>}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"talent_paginationBttns"}
            previousLinkClassName={"talent_previousBttn"}
            nextLinkClassName={"talent_nextBttn"}
            disabledClassName={"talent_paginationDisabled"}
            activeClassName={"talent_paginationActive"}
        /> 
        </div>
        </div>   
        </div>  
        </div>
        
    );
}

export default Enterprise_list;