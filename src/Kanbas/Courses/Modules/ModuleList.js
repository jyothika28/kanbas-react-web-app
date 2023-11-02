import {React,useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {RxDragHandleDots2} from "react-icons/rx";
import {IoMdArrowDropright} from "react-icons/io";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {BiCaretDown} from "react-icons/bi";
import {HiOutlineDotsVertical} from "react-icons/hi";
import {AiOutlinePlus} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const [editM, setEditShowM] = useState(false);
  // const handleMClose = () => setEditShowM(false);
  // const handleMShow = () => setEditShowM(true);




  return (
    <div>
    <ul className="list-group">
    <li className="list-group-item">
    <form>
  <div class="form-group">
    <input value={module.name} class="form-control" style={{margin:"1%"}}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
        />
    </div>
  <div class="form-group">
  <textarea value={module.description} class="form-control" style={{margin:"1%"}}
          onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
        />
  </div>
  <div class="form-group">
  <button style={{margin:"1%"}} className="btn btn-success" onClick={() => dispatch(updateModule(module))}> Update</button> 
  </div>
</form>
       
        
        {/* <button  className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))} style={{margin:"1%"}}>Add</button> */}
           </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          //  <li key={index} className="list-group-item">
          //    <h3>{module.name}</h3>
          //    <p>{module.description}</p>
          //  </li>
          <div style={{margin:"2%"}}>
          <li key={index} className="list-group-item list-group-item-action" aria-current="true" style={{backgroundColor:"#f5f5f5",border:"1px solid #c7cdd1",padding:"18px"}}>
        
                    <RxDragHandleDots2/> <IoMdArrowDropright/>&emsp;<b>{module.name}</b>
                    <div className="float-end">
                    <button class="btn btn-warning" style={{fontSize:"0.8rem",padding:"6px",fontWeight:"bold"}} onClick={(event) => {event.preventDefault();dispatch(setModule(module))}}>Edit</button>&emsp;
             <button className="btn btn-danger" style={{fontSize:"0.8rem",padding:"6px",fontWeight:"bold"}} onClick={(event) => {event.preventDefault();dispatch(deleteModule(module._id))}}> Delete</button>&emsp;

                        <BsFillCheckCircleFill style={{color:"green"}}/><BiCaretDown/>&emsp; <AiOutlinePlus/>&emsp;<HiOutlineDotsVertical/>
                        
            
                    </div>
                </li>
                <li className="list-group-item list-group-item-action" aria-current="true" style={{backgroundColor:"white",border:"1px solid #c7cdd1",padding:"18px"}}>
                  {module.description}
                  <div className="float-end">
                  <BsFillCheckCircleFill style={{color:"green"}}/>&emsp;<HiOutlineDotsVertical/>
                    </div>
                </li>
            </div>
      ))
      }
    </ul>
    </div>
  );
}
export default ModuleList;

                        {/* <Modal show={editM} onHide={handleMClose} animation={true}>
      <Modal.Header closeButton>
          <Modal.Title>Edit Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Name" value={module.name} onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))}
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Number" value={module.description} onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))}
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMClose}>
            Cancel
          </Button>
          <Button variant="success" 
          onClick={() => 
            {
              dispatch(updateModule(module));
              handleMClose();
            }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal> */}
                    {/* {Edit modal} */}
                    {/* <Modal edit={edit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}