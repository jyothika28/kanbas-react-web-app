import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };


  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="mb-3">
          <input value={account.password} placeholder="Enter Password" type="password" className="form-control"
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          </div>
          <div className="mb-3">
          <input value={account.firstName} placeholder="Enter First Name" className="form-control"
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          </div>
          <div className="mb-3">
          <input value={account.lastName} placeholder="Enter Last Name" className="form-control"
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          </div>
          <div className="mb-3">
          <input type="date" value={account.dob} placeholder="Enter DOB" className="form-control"
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          </div>
          <div className="mb-3">
          <input value={account.email} placeholder="Enter Email" className="form-control"
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          </div>
          <div className="mb-3">
          <select className="form-control" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          </div>
     
          <button className="btn btn-success w-100" onClick={save}>
     Save
  </button>
  <br/>
  <button className="btn btn-danger w-100" onClick={signout}>
    Signout
  </button>
  <Link to="/project/admin/users" className="btn btn-warning w-100">
    Users
  </Link>
        </div>
      )}
    </div>
  );
}
export default Account;