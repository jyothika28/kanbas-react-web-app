import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import {AiOutlinePlus} from "react-icons/ai";
import { React,useState } from "react";
import {BsPencilSquare} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse}
  
)
{
    // const courses = db.courses;
    console.log("In dash");
    console.log(courses);
    
    const course_length=courses.length;
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edit, setEditShow] = useState(false);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    
  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <div className="container">
      <h2>Published Courses ({course_length})</h2>
      <hr/>
      <div className="row">
      <div className="col">
      <div className="float-end">
        <button onClick={handleShow} className="btn btn-success .wd-button"><AiOutlinePlus style={{fontSize:"1.2rem"}}/> Add Course</button>
        </div>
        </div>
      </div>
      
      {/* <div class="mb-3">
  <label for="formFileSm" class="form-label">Small file input example</label>
  <input value="" class="form-control form-control-sm" id="formFileSm" type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
</div> */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Name" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value }) }
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Number" value={course.number} onChange={(e) => setCourse({ ...course, number: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Department" value={course.department} onChange={(e) => setCourse({ ...course, department: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Course Start Date" value={course.startDate} onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
            <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Course End Date" value={course.endDate} onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => 
            {
              addNewCourse();
              handleClose();
            }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={edit} onHide={handleEditClose} animation={true}>
      <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Name" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value }) }
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Number" value={course.number} onChange={(e) => setCourse({ ...course, number: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Department" value={course.department} onChange={(e) => setCourse({ ...course, department: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Course Start Date" value={course.startDate} onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> 
            <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Course End Date" value={course.endDate} onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }
                autoFocus
              />
            </Form.Group>
            

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => 
            {
              updateCourse(course);
              handleEditClose();
            }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>


      <div className="list-group">
      <div className="row row-cols-1 row-cols-md-4 g-4 wd-dashboard-grid">
        {courses.map((cc) => (
          <Link key={cc._id} to={`/Kanbas/Courses/${cc.number}`} className="list-group-item" style={{border:"none"}}>
            <div class="col">
            <div class="card h-100">
                        <img src={cc.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h6 className="card-title">{cc.number} {cc.department} {cc.name}</h6>
                          <p className="card-text">{cc.number}.{cc.department}.202410
                            <br/>
                            202410_1 Fall 2023 Semester Full Term
                          <br/>
                            <BsPencilSquare />&emsp;
                            <button className="btn btn-warning .wd-button" style={{padding:"4px",fontSize:"0.8rem",fontWeight:"bold"}}
                          onClick={(event) => {
                            event.preventDefault();
                            handleEditShow();
                            setCourse(cc);
              }}>
              Edit
            </button>&emsp;
<button className="btn btn-danger .wd-button" style={{padding:"4px",fontSize:"0.8rem",fontWeight:"bold"}}
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(cc._id);
              }}>
              Delete
            </button>
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
