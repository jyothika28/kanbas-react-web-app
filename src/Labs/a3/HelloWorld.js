import {Link} from "react-router-dom";
import Nav from "../../Nav";
function HelloWorld() {
    return(
        <div className="container">
           <Nav/> 
        <Link to="/hello">Hello</Link> |
        <Link to="/Labs/a3">A3</Link> |
        <Link to="/Kanbas">Kanbas</Link>
        <h1>Hello World!</h1>
       </div>
    );
 };
 export default HelloWorld;