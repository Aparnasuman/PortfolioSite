import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
  render(){
return (
     <div class="row">
      
         <nav className="sidebar col-md-2 col-sm-3">
         <img src={logo} alt="Download" className="download"/>
         <ul className="list">
         <Link to="/about"><li className="listabout">ABOUT</li></Link>
         <Link to="/experience"><li className="listabout">EXPERIENCE</li></Link>
         <Link to="/education"> <li className="listabout">EDUCATION</li></Link>
         <Link to="/skills">  <li className="listabout">SKILLS</li></Link>
         <Link to="/project"> <li className="listabout">PROJECT</li></Link>
         <Link to="/intrest"> <li className="listabout">INTREST</li></Link> 
         </ul>
         </nav>
         <div class="content col-md-10 col-sm-9">
         
         </div>
      </div>
    )
};
};

export default  NavBar;