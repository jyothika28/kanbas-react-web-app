
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Kanbas from './Kanbas';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <HashRouter>
            <Routes>
            <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
