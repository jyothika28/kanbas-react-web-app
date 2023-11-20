import {Route, Routes,Navigate} from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useEffect,useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  //const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_URL);
    console.log("Getting courses");
    console.log(response.data);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: new Date().getTime().toString(),
    name: "Enter Course Name",      number: "Enter Course Number",
    department: "Enter Department",
    credits: "Enter Credits",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../../images/orange_card.png",
    // 
  });
  const addNewCourse = async () => {
    try{
    const response = await axios.post(COURSES_URL, course);
    setCourses([response.data, ...courses]);}
    catch(error){ console.log(error);}
  };
  const deleteCourse = async (courseId) => {
    console.log("Console")
    console.log("Deleting course with id: " + courseId);
    console.log(course);
    const response = await axios.delete(`${COURSES_URL}/${courseId}`);
    console.log(`${COURSES_URL}/${courseId}`)
    console.log("Deleting course");
    console.log(response.data);
    setCourses(courses.filter((c) => c._id !== courseId));
    
  };
  
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  const updateCourse = async (course) => {
    try{
    const response = await axios.put(
      `${COURSES_URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    }
    catch(error){
      console.log(error);
    }
  };

   return (
    <Provider store={store}>
    <div class="overflow-x-hidden">
     <div className="row">
      <div className="col-1">
       <KanbasNavigation/>
       </div>
       <div className="col">
       <div>
        <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="/Account" element={<Account/>}/>
        <Route path="/Dashboard" element={
          <Dashboard
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}/>
        }/>
        <Route path="/Courses/:courseId/*" element={<Courses  courses={courses}/>}/>
        <Route path="/Calendar" element={<h1>Calendar</h1>}/>
        <Route path="/Inbox" element={<h1>Inbox</h1>}/>
        <Route path="/History" element={<h1>History</h1>}/>
        <Route path="/Studio" element={<h1>Studio</h1>}/>
        <Route path="/Commons" element={<h1>Commons</h1>}/>
        <Route path="/Help" element={<h1>Help</h1>}/>
        </Routes>
      
       </div>
     </div>
     </div>
     </div>
     </Provider>
   );
 }
 export default Kanbas;