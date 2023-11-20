import ModuleList from "./ModuleList";
import { useParams } from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";
import {HiOutlineEllipsisVertical} from "react-icons/hi2";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
function Modules() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  return (
    <div className="container">
      <div className="row">
    <div className="col">
      <br/>
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
              handleAddModule();
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
  );
}
export default Modules;