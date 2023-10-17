import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza","Zoom Meetings","Assignments",
  "Quizzes","Grades","People","Panopto Video","Credentials","Progress Reports(EAB Navigate)"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-course-navigation" >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "wd-active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;