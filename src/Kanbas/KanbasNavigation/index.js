import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {PiUserCircleFill} from "react-icons/pi";
import {TfiDashboard} from 'react-icons/tfi';
import {BiBook} from 'react-icons/bi';
import {FaCalendarAlt} from 'react-icons/fa';
import {LuInbox} from 'react-icons/lu';
import {GoHistory} from 'react-icons/go';
import {LuMonitorPlay} from 'react-icons/lu';
import {IoMdLogOut} from 'react-icons/io';
import {TfiHelpAlt} from 'react-icons/tfi';
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];
  const linksToIcons={
    Account: <PiUserCircleFill className="wd-icon"/>,
    Dashboard:<TfiDashboard className="wd-icon"/>,
    Courses:<BiBook className="wd-icon"/>,
    Calendar:<FaCalendarAlt className="wd-icon"/>,
    Inbox:<LuInbox className="wd-icon"/>,
    History:<GoHistory className="wd-icon"/>,
    Studio:<LuMonitorPlay className="wd-icon"/>,
    Commons:<IoMdLogOut className="wd-icon"/>,
    Help:<TfiHelpAlt className="wd-icon"/>
};
  const { pathname } = useLocation();
  //style={{backgroundColor:"black"}}
  return (
    <div className="list-group wd-kanbas-navigation">
      <img class="northeastern-logo" src="../../../images/northeastern_logo.png" alt="Northeastern-logo"></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "wd-active"}`} 
          >
          {linksToIcons[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;