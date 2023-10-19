import Assignment3 from "./a3";
import Nav from "../Nav";
import {Link} from "react-router-dom";
function Labs(){
    return (
        <div className="container">
            <Nav/>
               <Link to="/hello">Hello</Link> |
                <Link to="/Labs/a3">A3</Link> |
                Click here to navigate to the Kanbas Application&emsp;
                <Link to="/Kanbas">Kanbas</Link>
            <Assignment3 />
        </div>
    );
}

export default Labs;