import ModuleList from "./ModuleList";
import {AiOutlinePlus} from "react-icons/ai";
import {HiOutlineEllipsisVertical} from "react-icons/hi2";



function Modules() {
  return (
    <div className="container">
      <div className="row">
    <div className="col">
    <div className="float-end">
              <button className="border btn btn-light">Collapse All</button>
              <button className="border btn btn-light">View Progress</button>
              <div className="d-inline-flex p-2">
                  <select className="form-select" aria-label="Default select example">
                      <option>Publish all</option>
                      <option>Publish all modules and items</option>
                  <option>Publish modules only</option>
                  <option>Unpublish all modules and items</option>
                  </select>
              </div>
              
          <button className="border btn btn-danger"><AiOutlinePlus style={{fontSize:"1.5rem"}}/> Module</button>
          <button className="border btn btn-light"><HiOutlineEllipsisVertical style={{fontSize:"1.5rem"}}/></button>
          
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