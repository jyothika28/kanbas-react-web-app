import ModuleList from "../Modules/ModuleList";
import {AiOutlinePlus} from "react-icons/ai";
import { Link } from "react-router-dom";
import {HiOutlineEllipsisVertical} from "react-icons/hi2";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {LuBan} from "react-icons/lu";
import {LiaFileExportSolid} from "react-icons/lia";
import {BiSolidBarChartAlt2} from "react-icons/bi";
import {TbCircleArrowRightFilled} from "react-icons/tb";
import {GiMicroscopeLens} from "react-icons/gi";
import {BsBell} from "react-icons/bs";
import {GrAnnounce} from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "../Modules/modulesReducer";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="row">
    <div className="col-9">
    <div className="container">
        <br/>
      <div className="row">
    <div className="col">
    <div className="float-end">
              <button className="border btn btn-light p-2">Collapse All</button>
              <button className="border btn btn-light p-2">View Progress</button>
              <div className="d-inline-flex p-2">
                  <select className="form-select" aria-label="Default select example">
                      <option>Publish all</option>
                      <option>Publish all modules and items</option>
                  <option>Publish modules only</option>
                  <option>Unpublish all modules and items</option>
                  </select>
              </div>
              
          <button variant="primary" onClick={handleShow} className="border btn btn-danger me-2"><AiOutlinePlus style={{fontSize:"1.5rem"}}/> Module</button>
          <button className="border btn btn-light me-2"><HiOutlineEllipsisVertical style={{fontSize:"1.5rem"}}/></button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Module Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Module Name" onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Module Description</Form.Label>
              <Form.Control as="textarea" placeholder="Enter Module Description" rows={3}  onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* onClick={handleClose} */}
          <Button variant="danger"  onClick={() => 
            {
              dispatch(addModule({ ...module, course: courseId }));
              handleClose();
            }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>
        </div>
          <hr/>
            <div className="row">
            <div className="col">
            <ModuleList />
            </div>
        </div>
     </div>  
     </div>       
    <div className="col">
        <br/>
      <div className="d-none d-xl-block">
                <h4>Course Status</h4>
                <button type="button" className="border btn btn-light" disabled><LuBan style={{fontSize:"1.5rem"}}/> Unpublish</button>
                <button type="button" className="btn btn-success" disabled><i class="fa fa-check-circle" aria-hidden="true"></i><AiOutlineCheckCircle style={{fontSize:"1.5rem"}}/> Published</button>
            <br/>
            <br/>
            <div className="d-grid">
            
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><LiaFileExportSolid style={{fontSize:"1.5rem"}}/>Import Existing Content</button>
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><TbCircleArrowRightFilled style={{fontSize:"1.5rem"}}/>Import from Commons</button>
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><GiMicroscopeLens style={{fontSize:"1.5rem"}}/> Choose Home Page</button>
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><BiSolidBarChartAlt2 style={{fontSize:"1.5rem"}}/>View Course Stream</button>
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><GrAnnounce style={{fontSize:"1.5rem"}}/> New Announcement</button>
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><BiSolidBarChartAlt2 style={{fontSize:"1.5rem"}}/> New Analytics</button>
            <button type="button" className="border btn btn-light" style={{textAlign:"left"}}><BsBell style={{fontSize:"1.5rem"}}/>View Course Notifications</button>
            </div>
            <br/>
            <h4>Comming Up</h4>
            <Link to={"#"}>View Calender</Link>
            </div>
    </div>
    </div>
  );
}
export default Home;