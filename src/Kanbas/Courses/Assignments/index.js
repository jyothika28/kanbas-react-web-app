import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai";
import {HiOutlineEllipsisVertical} from "react-icons/hi2";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="container">
        <br/>
        <br/>
        <div className="row">
            

        <div className="col">
            <div className="float-start">
                <input type="text" className="form-control" id="exampleInput" placeholder="Search for Assignment"/>       
            </div>
            <div className="float-end">
                
                <button className="border btn btn-light"><AiOutlinePlus style={{fontSize:"1.5rem"}}/>Group</button>
                <button className="border btn btn-danger"><AiOutlinePlus style={{fontSize:"1.5rem"}}/>Assignment</button>
            <button className="border btn btn-light"><HiOutlineEllipsisVertical style={{fontSize:"1.5rem"}}/></button>
            </div>
            <br/>
            
        </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col">
            <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
            </div>
        </div>
      
  );
}
export default Assignments;