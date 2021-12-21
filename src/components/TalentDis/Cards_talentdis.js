import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import TalentItems from "./TalentItems";
import ReactPaginate from "react-paginate";
import Talent_Modal from "./Talent_Modal";
import './Cards_talentdis.css';

function Cards_talentdis () {
    const [talentModalOpen, setTalentModalOpen] = useState(false);
    const [talentItem,setTalentItem] = useState([
        {text1: "Job 1", text2: "Development"},
        {text1: "Job 1", text2: "Development"},
        {text1: "Job 1", text2: "Development"},
        {text1: "Job 1", text2: "Development"},
    ])

    const [pageNumber, setPageNumber] = useState(0);

    const itemPerPage = 3;
    const pagesVisited = pageNumber * itemPerPage;

    const pageCount = Math.ceil(talentItem.length / itemPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const  talentsList = talentItem.slice(pagesVisited, pagesVisited + itemPerPage).map((item,index) => {
                    return (
                        <TalentItems key={index}  text1={item.text1} text2={item.text2} click1={() => {setTalentModalOpen(true);}}/>
                    );
                }
    )
   
    return (
        <div className = "findwork_container">
             {talentModalOpen && <Talent_Modal setOpenModal={setTalentModalOpen} />}
        <div className = "findwork_title">
            <div className="title_search">     
                <table className="talent_list_title">
                        <th>
                            <h1>Discover</h1>
                            <p>Tailored talent matches to help you hire the right person faster</p></th>
                        <div className='post_button'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>See more Like This</Button></div>
                </table>
            </div>
        </div>
        <div  className = 'findwork_body'>
        <div className='findwork_item'>
        <div className = 'list_left'> 
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-address-card" aria-hidden="true"></i>Saved Talent</Button>
            <Button className='btns' buttonStyle='btn--findwork' buttonSize='btn--medium'><i class="fa fa-tags" aria-hidden="true"></i>Saved Project</Button>
        </div>  
                {talentsList}
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

export default Cards_talentdis;