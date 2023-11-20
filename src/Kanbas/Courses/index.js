import { Navigate, useLocation,Route, Routes,useParams } from "react-router";
import React from "react";
import db from "../Database";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import KanbasNavBar from "./KanbasNavBar";
import AssignmentNew from "./Assignments/AssignmentNew";

function Courses()
{
    const {courseId}=useParams();
    const { pathname } = useLocation();
    const [priorkanbas,kanbas,id,screen]=pathname.split('/');
    const [course, setCourse] = useState({});
    const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;
    const findCourseById = async (courseId) => {
      // const response = await axios.get(
      //   `${URL}/${courseId}`
      // );
      // console.log("Getting course");
      // console.log(`${URL}/${courseId}`);
      // console.log("Response");
      // console.log(response.data);
      //setCourse(response.data);
    };
    useEffect(() => {
      console.log("CourseIDjdd");
      console.log(courseId);
      findCourseById(courseId);
    }, [courseId]);
    
    return(
        <div>
          <KanbasNavBar/>
         
            <CourseNavigation/>

            <div className="container">
        <div className="overflow-y-scroll overflow-x-hidden position-fixed bottom-0 end-0"
          style={{
            left: "250px",
            top: "60px",
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
            <Route path="Assignments/*" element={<AssignmentNew/>} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

        </div>
    );
}
export default Courses;