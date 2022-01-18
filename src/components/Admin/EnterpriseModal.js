import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import { useEffect, useState } from "react";
import "../EnterpriseProfile/EnterpriseProfile.css";
function EnterpriseModal(props) {
    
    return (
        <div className="talent_modalBackground">
        <div className="talent_modalContainer"  role='dialog'>
        <div className="talent_titleCloseBtn">
        <Link className="fa fa-angle-left fa-3x link"  aria-hidden="true" onClick={() => { props.setOpenModal(false);}}></Link> 
        </div>
        <div className='enterprise_container'>
                <div className='enterprise_user_admin'>
                <div className = "connect">
                    <div className = "enterprise_card">
                        <div className="enterprise_card-header">
                        <h5>Company Contact </h5>
                    
                        </div>
                    
                        <div className="enterprise_card-body">
                            <ul>
                            <li><p>Email :</p></li>
                            <li><p>Phone : </p></li>
                            </ul>
                        </div>   
                    </div>  
                    
                </div>
                <div className="skills">
                <div className = "enterprise_card">
                        <div className="enterprise_card-header">
                    <h5>Company Details</h5>
                        </div>
                        <div className="enterprise_card-body">
                            <h3>  </h3>
                            <ul>
                                <li><p> </p></li>
                                <li><p></p> </li>
                                <li><p></p></li>
                                <li><p></p></li>
                                <li><p></p></li>
                            </ul>
                        </div>
                </div>
                </div>
                <div className="skills">
                <div className = "enterprise_card">
                        <div className="enterprise_card-header">
                    <h5>Reported</h5>
                        </div>
                        <div className="enterprise_card-body">
                            <h3>  </h3>
                            <ul>
                                <li><p> </p></li>
                                <li><p></p> </li>
                                <li><p></p></li>
                                <li><p></p></li>
                                <li><p></p></li>
                            </ul>
                        </div>
                </div>
                </div>
                </div>
             
</div>

      </div>
    </div>
    );
}

export default EnterpriseModal; 