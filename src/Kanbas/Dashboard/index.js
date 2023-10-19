import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import {BsPencilSquare} from "react-icons/bs"
function Dashboard()
{
    const courses = db.courses;
    const course_length=courses.length;

  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <div className="container">
      <h2>Published Courses ({course_length})</h2>
      <hr/>
      <div className="list-group">
      <div className="row row-cols-1 row-cols-md-4 g-4 wd-dashboard-grid">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item" style={{border:"none"}}>
            <div class="col">
            <div class="card h-100">
                        <img src={course.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h6 className="card-title">{course.number} {course.crn} {course.name}</h6>
                          <p className="card-text">{course.number}.{course.crn}.202410
                            <br/>
                            202410_1 Fall 2023 Semester Full Term
                            <br/>
                            <BsPencilSquare />
                          </p>
                        </div>
                      </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
    </div>
  );
}
export default Dashboard;
