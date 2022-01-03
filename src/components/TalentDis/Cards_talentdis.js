import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import TalentItems from "./TalentItems";
import ReactPaginate from "react-paginate";
import Talent_Modal from "./Talent_Modal";
import './Cards_talentdis.css';
import "./TalentItems.css";
import axios from "axios";
import TalentInvitation from "./TalentInvitation";

function Cards_talentdis () {
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
        <div className = "findwork_title">
            <div className="title_search">     
                <div className="talent_list_title">
                    <div className="talent_list_title_left">
                            <h1>Discover</h1>
                            <p>Tailored talent matches to help you hire the right person faster</p>
                    </div>
                    <div className="talent_list_title_right">
                             <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>See more Like This</Button>
                    </div>
                           
                       
                </div>
            </div>
        </div>
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div class = "list_right">
        
        {talentsList}
        </div>

        <div className = 'list_left'> 
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-address-card" aria-hidden="true"></i>Saved Talent</Button>
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-tags" aria-hidden="true"></i>Saved Project</Button>
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

export default Cards_talentdis;