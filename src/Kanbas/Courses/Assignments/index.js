import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai";
import {HiOutlineEllipsisVertical} from "react-icons/hi2";
import { BiCaretDown } from "react-icons/bi";
import {RxDragHandleDots2 } from "react-icons/rx";
import {HiOutlineDotsVertical} from "react-icons/hi";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {FaFilePen} from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="container">
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
            {/* <h2>Assignments for course {courseId}</h2> */}
      <div className="list-group">
      <Link to="#" className="list-group-item list-group-item-action " aria-current="true" style={{backgroundColor:"#f5f5f5",padding:"16px"}}>
      <RxDragHandleDots2/><BiCaretDown/>&emsp;<b>ASSIGNMENTS</b>
                    <div class="float-end">
                        <span className="badge wd-bg-color border rounded-pill" style={{color:"black",backgroundColor:"lightgray"}}>40% of Total</span>
                        &emsp;<AiOutlinePlus/> <HiOutlineDotsVertical/>
                    </div>
                </Link>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item list-group-item-action " aria-current="true" >
              <div className="row">
                <div className="col-11">
                &emsp;<RxDragHandleDots2/> <FaFilePen style={{color:"green"}}/>  <i class="fa fa-sort-desc" aria-hidden="true"></i>&emsp;<b>{assignment.title}</b>
                
                <div style={{paddingLeft:"70px"}}>
            <p class="mb-1">{assignment.description}</p>
            <small><b>Due </b>{assignment.due}, at {assignment.time} | {assignment.points} pts</small>
          </div>
          </div>
                
          <div class="col">
           <div className="float-end">
                <BsFillCheckCircleFill style={{color:"green"}}/> <i className="fa fa-sort-desc" aria-hidden="true">&emsp;</i><HiOutlineDotsVertical/>
            </div>
           </div>
              </div>
            
           
            
          
          </Link>
      //     <a href="#" class="list-group-item list-group-item-action " aria-current="true" style="background-color:rgb(238, 230, 230);">
      //     <i class="fa fa-ellipsis-v" aria-hidden="true"></i><i class="fa fa-ellipsis-v" aria-hidden="true"></i>  <i class="fa fa-sort-desc" aria-hidden="true"></i>&emsp;<b>Assignments</b>
      //     <div class="float-end">
      //         <span class="badge wd-bg-color border rounded-pill">40% of Total</span>
      //         <i class="fa fa-check-circle wd-green" aria-hidden="true"></i> <i class="fa fa-sort-desc" aria-hidden="true">&emsp;</i> <i class="fa fa-plus" aria-hidden="true"></i>&emsp;<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      //     </div>
      // </a>
          
        ))}
      </div>
    </div>
            </div>
        </div>
      
  );
}
export default Assignments;