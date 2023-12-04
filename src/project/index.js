import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
import ProjectNav from "./projectnav";
function Project() {
  return (
    <div className="container">

    <div className="row">
      <Nav />
      <div className="col-2">
       <ProjectNav/> 
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </div>
    //sks
  );
}
export default Project;