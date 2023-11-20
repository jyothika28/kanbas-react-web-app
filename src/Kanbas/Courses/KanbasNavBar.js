import {HiBars3} from "react-icons/hi2";
import { Navigate, useLocation,Route, Routes,useParams } from "react-router";
import React from "react";
import db from "../Database";
import { useState, useEffect } from "react";
import axios from "axios";
function KanbasNav()
{
    const {courseId}=useParams();
    const { pathname } = useLocation();
    const [priorkanbas,kanbas,courses,id,screen,assignment_name]=pathname.split('/');
    const [course, setCourse] = useState({});
    
    return(
        
        <div className="wd-bc-nav">
             <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
              <br/>
            <ol className="breadcrumb">
              <li>{<HiBars3 style={{color:"rgb(176,37,37)", fontSize:"1.9rem"}}/>}</li>&emsp;
              <li className="breadcrumb-item" style={{color:"rgb(176,37,37)"}}>{courseId}.202310</li>
              <li className="breadcrumb-item active" aria-current="page">{screen}</li>
              
              {assignment_name ? (
        <li className="breadcrumb-item active" aria-current="page">
          {assignment_name}
        </li>
      ) : " "}</ol>
    
          </nav>
          <hr/>
          </div>
    );
}
export default KanbasNav;
