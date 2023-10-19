import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {RxDragHandleDots2} from "react-icons/rx";
import {IoMdArrowDropright} from "react-icons/io";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {BiCaretDown} from "react-icons/bi";
import {HiOutlineDotsVertical} from "react-icons/hi";
import {AiOutlinePlus} from "react-icons/ai";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          //  <li key={index} className="list-group-item">
          //    <h3>{module.name}</h3>
          //    <p>{module.description}</p>
          //  </li>
          <div style={{margin:"2%"}}>
          <li key={index} className="list-group-item list-group-item-action" aria-current="true" style={{backgroundColor:"#f5f5f5",border:"1px solid #c7cdd1",padding:"16px"}}>
                    <RxDragHandleDots2/> <IoMdArrowDropright/>&emsp;<b>{module.name}</b>
                    <div className="float-end">
                        <BsFillCheckCircleFill style={{color:"green"}}/><BiCaretDown/>&emsp; <AiOutlinePlus/>&emsp;<HiOutlineDotsVertical/>
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