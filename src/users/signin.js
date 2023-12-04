import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <br/>
      <h1>Signin</h1>
      <div class="mb-3">
      <input value={credentials.username} placeholder="Enter Username" className="form-control"
      onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      </div>
      <div class="mb-3">
      <input value={credentials.password} placeholder="Enter Password" type="password" className="form-control"
      onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>
      <button className="btn btn-success"
      onClick={signin}> Signin </button>
      
    </div>
  );
}
export default Signin;