import {FaBars} from "react-icons/fa";
import { Navigate, useLocation,Route, Routes,useParams } from "react-router";
import React from "react";
import db from "../Database";
function Nav()
{
    const {courseId}=useParams();
    const { pathname } = useLocation();
    const [priorkanbas,kanbas,courses,id,screen,assignment_name]=pathname.split('/');
    const course=db.courses.find((course) =>course._id===courseId);
    return(
        
        <div className="wd-bc-nav">
             <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
              <br/>
            <ol className="breadcrumb">
              {<FaBars style={{color:"rgb(176,37,37)"}}/>}&emsp;
              <li className="breadcrumb-item" style={{color:"rgb(176,37,37)"}}>{courseId}.{course.crn}.202310</li>
              <li className="breadcrumb-item active" aria-current="page">{screen}</li>
              
              {assignment_name ? (
        <li className="breadcrumb-item active" aria-current="page">
          {assignment_name}
        </li>
      ) : " "}</ol>
    
          </nav>
          
          </div>
    );
}
export default Nav;