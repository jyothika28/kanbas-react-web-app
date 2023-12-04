import { Link, useLocation } from "react-router-dom";
function Projectnav() {
  const { pathname } = useLocation();
  return (
    
    <ul  class="list-group">
        <br/>
        <li class="list-group-item">
        <Link to="/project/signin"
            className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Signin</Link>
        </li>
        <li class="list-group-item">
        <Link to="signup"
            className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Signup</Link>
        </li>
        <li class="list-group-item">
        <Link to="account"
            className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
        </li>
        <li class="list-group-item">
        <Link to="/search"  
            className={`nav-link ${pathname.includes("search") ? "active" : ""}`}>Search</Link>  
        </li>
    </ul>
  );
}
export default Projectnav;