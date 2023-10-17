import db from "../../Database";
import { useParams } from "react-router-dom";
import {FiFilter} from "react-icons/fi";
import {LiaFileImportSolid} from "react-icons/lia";
import {LiaFileExportSolid} from "react-icons/lia";
import {AiFillCaretDown} from "react-icons/ai";
import {IoMdSettings} from "react-icons/io";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="container">
    <div className="row">
      
      <div className="col">
           
            <div className="float-end">
                <br/>
                <button className="border btn btn-light"><LiaFileExportSolid style={{fontSize:"1.5rem"}}/>Import</button>
                <button className="border btn btn-light"><LiaFileImportSolid style={{fontSize:"1.5rem"}}/>Export<AiFillCaretDown/></button>
            <button className="border btn btn-light"><IoMdSettings style={{fontSize:"1.5rem"}}/></button>
            </div>
            <br/>
            <br/>
        </div>
        </div>
            <div className="row">
                <div className="col">
                <label for="exampleDataList" class="form-label"><b>Student Names</b></label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search Students"/>
                <datalist id="datalistOptions">
                <option value="Student 1"/>
                </datalist>
                </div>
                <div className="col">
                <label for="exampleDataList" className="form-label"><b>Assignment Names</b></label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search Assignments"/>
                <datalist id="datalistOptions">
                <option value="Assignment 1"/>
                </datalist>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                <button type="button" class="btn btn-light border"><FiFilter style={{fontSize:"1.5rem"}}/>Apply Filters</button>
                </div>
            </div>
            <br/>
           <div className="table-responsive">
        <table className="table table-striped table table-bordered">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
            </tbody>
            </table>
      </div></div>
      );
}
export default Grades;