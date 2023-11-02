import { Navigate, useLocation,Route, Routes,useParams } from "react-router";
import React from "react";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import KanbasNavBar from "./KanbasNavBar";
import AssignmentNew from "./Assignments/AssignmentNew";

function Courses({ courses })
{
    const {courseId}=useParams();
    const { pathname } = useLocation();
    const [priorkanbas,kanbas,courses_from_path,id,screen]=pathname.split('/');
    const course=courses.find((course) =>course._id===courseId);
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