import { Navigate, useLocation,Route, Routes,useParams } from "react-router";
import React from "react";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import {FaBars} from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses()
{
    const {courseId}=useParams();
    const { pathname } = useLocation();
    const [priorkanbas,kanbas,courses,id,screen]=pathname.split('/');
    const course=db.courses.find((course) =>course._id===courseId);
    return(
        <div className="container">
            <div className="wd-bc-nav">
             <nav aria-label="breadcrumb">
              <br/>
            <ol className="breadcrumb">
              {<FaBars />}&emsp;
              <li className="breadcrumb-item" style={{color:"rgb(176,37,37"}}>{courseId}.{course.crn}.202310</li>
              <li className="breadcrumb-item active" aria-current="page">{screen}</li>
              </ol>
          </nav>
          <hr />
            <CourseNavigation/>

            <div className="container">
        <div className="position-fixed bottom-0 end-0"
          style={{
            left: "250px",
            top: "50px",
          }}>
        
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

        </div>
        </div>
    );
}
export default Courses;