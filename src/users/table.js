import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill,BsFillCheckCircleFill,BsPencil }
  from "react-icons/bs";
import * as client from "./client";
function UserTable() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  
  useEffect(() => { fetchUsers(); }, []);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <br/>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
             <div className="mb-3">
              <input value={user.username} placeholder="Enter Username" className="form-control" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              </div>
              <div className="mb-3">
              <input value={user.password} placeholder="Enter Password" className="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </div>
            </td>
            <td>
            <div className="mb-3">
              <input value={user.firstName} placeholder="Enter First Name" className="form-control" onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </div>
            </td>
            <td>
            <div className="mb-3">
              <input value={user.lastName} placeholder="Enter Last Name" className="form-control"  onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
           </div>
            </td>
            <td>
            <div className="mb-3">
              <select className="form-control" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
            </td>
            <td>
            <div className="mb-3">
              <BsPlusCircleFill onClick={createUser} style={{fontSize:"2rem"}}/>&emsp;
              <BsFillCheckCircleFill onClick={updateUser}
      className="me-2 text-success fs-1 text" />
            </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
    {/* <button className="btn btn-danger me-2">
      <BsTrash3Fill onClick={() => deleteUser(user)} />
    </button> */}
     <button className="btn btn-warning me-2">
      <BsPencil onClick={() => selectUser(user)} />
    </button>
    <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button> 
  </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;