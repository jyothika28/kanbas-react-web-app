// import Assignment3 from "./a3";
// import Nav from "../Nav";
// import {Link} from "react-router-dom";
// import KanbasNavigation from "../Kanbas/KanbasNavigation";
// function Labs(){
//     return (
//         <div className="container">
//             <Nav/>
//                <Link to="/hello">Hello</Link> |
//                 <Link to="/Labs/a3">A3</Link> |
//                 {/* <Route path="a4"
//         element={<Assignment4/>}/> */}
//                 <Link to="/Labs/a4">A4</Link> |
//                 Click here to navigate to the Kanbas Application&emsp;
//                 <Link to="/Kanbas">Kanbas</Link>
//             <Assignment3 />
//         </div>
//     );
// }

// export default Labs;
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route, Navigate}
  from "react-router";
  import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
    <Provider store={store}>
   <div className="container">
     <Nav/>
     <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
     </Routes>
   </div>
   </Provider>
 );
}

export default Labs;