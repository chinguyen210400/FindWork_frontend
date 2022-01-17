import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import TalentItems from "../TalentDis/TalentItems";
import Talent_Modal from "../TalentDis/Talent_Modal";
import ReactPaginate from "react-paginate";
import '../TalentDis/Cards_talentdis.css';
import axios from "axios";
import TalentInvitation from "../TalentDis/TalentInvitation";

function Employee_list () {
    const token = localStorage.getItem("auth_token")
    const [talentModalOpen, setTalentModalOpen] = useState(false);

    const [talentItem,setTalentItem] = useState([
    ])

    const [talentModaltem, setTalentModalItem] = useState({})
    useEffect(() => {
        axios.get(`/api/employee`, {headers : {"Authorization" : `Bearer ${token}`}}).then(
            res => {
                console.log(res.data.employees);
                setTalentItem(res.data.employees)
            }
        )
    }, [])
    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 6;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(talentItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const  talentsList = talentItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
                    return (
                        <TalentItems key={index} talentInfo = {item} click1={() => {setTalentModalOpen(true); setTalentModalItem(item) }}/>
                    );
                }
    )
   
    return (
        <div className = "talent_container">
             {talentModalOpen && <Talent_Modal setOpenModal={setTalentModalOpen} talentInfo = {talentModaltem} />}
        <div className = "findjob_title">
            <div className="title_search">     
                <div className="talent_list_title">
                    <div className="talent_list_title_left">
                            <h1>Employee</h1>
                    </div>
                       
                </div>
            </div>
        </div>
        <div  className = 'findjob_body'>
        <div className='findjob_item'>
        <div class = "admin_list_right">
        
        {talentsList}
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

export default Employee_list;