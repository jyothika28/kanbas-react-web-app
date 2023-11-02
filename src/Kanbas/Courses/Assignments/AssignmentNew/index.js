import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
  } from "../assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function AssignmentNew() {
//   const { assignmentId } = useParams();
//   const assignment = db.assignments.find(
//     (assignment) => assignment._id === assignmentId);
//     console.log(assignmentId);

  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");

    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container">
      <br/>
      <h6>Assignment Name</h6>
      <input placeholder="Enter Assignment Name" onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
             className="form-control mb-2" />
      <div className="mb-3">
            <br/>
            <textarea onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))
          } placeholder="Enter Assignment Description" className="form-control" id="exampleFormControlTextarea1" rows="4">
            </textarea>
          </div>
          <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Points</label>
                    </div>
            </div>
            <div className="col-6">
            <div className="mb-3">
                <input type="number"  onChange={(e) =>
            dispatch(setAssignment({ ...assignment, points: e.target.value }))
          } className="form-control" id="exampleFormControlInput1" placeholder="Enter Points" />
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Assignment Group</label>
                    </div>
            </div>
            <div className="col-6">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Assignments</option>
                    <option>Topic Quizzes</option>
                   <option>Syllabus Quiz</option>
                  <option>Attendance</option>
                <option>Take Home Exam</option>
                <option>Project</option>
                <option>Exam 1</option>
                <option>Exam 2</option>
                <option>Imported Assignments</option>
                <option>[Create Group]</option>
                </select>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Display Grade as</label>
                    </div>
            </div>
            <div className="col-6">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Percentage</option>
                    <option>Complete/Incomplete</option>
                    <option>Points</option>
                    <option>Letter Grade</option>
                    <option>GPA Scale</option>
                    <option>Not Graded</option>
                  </select>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Submission Type</label>
                    </div>
            </div>
            <div className="col-6">
                <select className="form-select" aria-label="Default select example">
                    <option>No Submission</option>
                    <option selected>Online</option>
                    <option>On Paper</option>
                    <option>External Tool</option>
                  </select>
           
        <br/>
        
        <div className="mb-3">
            <b>Online Entry Options</b>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Text Entry
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" for="flexCheckChecked">
                Website URL
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" for="flexCheckChecked">
                Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" for="flexCheckChecked">
                Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label className="form-check-label" for="flexCheckChecked">
                File Uploads
            </label>
          </div>
          
        </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Submission Attempts</label>
                    </div>
            </div>
            <div className="col-6">
                <b>Allowed Attempts</b>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Unlimited</option>
                    <option>Limited</option>
                  </select>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Plagiarism Review</label>
                    </div>
            </div>
            <div className="col-6">
                <select className="form-select" aria-label="Default select example">
                    <option selected>None</option>
                    <option>Turnitin Plagiarism Framework</option>
                  </select>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label float-end">Group Assignment</label>
                    </div>
            </div>
            <div className="col-6">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        This is a group assignment
                    </label>
                  </div>
            </div>
        </div>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Peer Reviews</label>
                    </div>
            </div>
            <div className="col-6">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Require Peer reviews
                    </label>
                  </div>
            </div>
        </div>
        <div className="row">
            <div className="col-3"> 
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label float-end">Assign to</label>
                    </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                  </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Due</label>
                    <input type="date" onChange={(e) =>
            dispatch(setAssignment({ ...assignment, due: e.target.value }))
          } class="form-control" id="exampleFormControlInput1" placeholder="Enter Due Date" />
                  </div>
                  <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Available From</label>
                    <input type="date" class="form-control" id="exampleFormControlInput1" value="Available From"/>
                  </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Until</label>
                      <input type="date" class="form-control" id="exampleFormControlInput1" value="Until"/>
                    </div>
                    </div>
                  </div>
            </div>
        </div>
        <hr/>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Notify users that this content has changed
            </label>
          </div>
      <div className="float-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={() => 
            {
              dispatch(addAssignment({ ...assignment, course: courseId }));
              handleSave();
            }} className="btn btn-success me-2">
        Save
      </button>
      </div>
    </div>
  );
}


export default AssignmentNew;