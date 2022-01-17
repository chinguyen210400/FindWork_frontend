import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Layouts/Button";
import {Table} from "react-bootstrap";
import "./Report.css"

function Report () {
    const Report = [
        {id:1, report: "default" , reason : "default"},
        {id:1, report: "default" , reason : "default"},
        {id:1, report: "default" , reason : "default"},
        {id:1, report: "default" , reason : "default"},
        {id:1, report: "default" , reason : "default"},
    ]
    return (
        <div className="report_container">
            <div className="report_title">
                <h1>Report table</h1>
            </div>
            <div className="report_table">
            <Table >
     <tbody>
    <tr>
      <td>#</td>
      <td>Report</td>
      <td>Reason</td>
    </tr>
  {
      Report.map((item,i) => 
      <tr key={i}>
      <td>{item.id}</td>
      <td>{item.report}</td>
      <td>{item.reason}</td>
    </tr>
      )
  }
  </tbody>
</Table>
            </div>
</div>
    );
}

export default Report;