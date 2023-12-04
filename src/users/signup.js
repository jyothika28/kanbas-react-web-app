import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
        <br/>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
        <br/>
        <div class="mb-3">

      <input
        value={credentials.username} placeholder="Enter Username" className="form-control"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
        </div>
        <div class="mb-3">
      <input
        value={credentials.password} placeholder="Enter Password" className="form-control" type="password"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
          </div>
      <button onClick={signup} className="btn btn-success">
        Signup
      </button>
    </div>
  );
}
export default Signup;