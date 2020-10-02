import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import AboutDetail from './about';
class NavBar extends React.Component {
  render(){
return (
    
      
         <nav className="sidebar" id="collapseExample">
        
         <img src={logo} alt="Download" className="download"/>
          
         <button className="btn btn-info justify-content-center ">Home</button>
         <ul className="list">
         <Link to="/about"><li className="listabout">ABOUT</li></Link>
         <Link to="/experience"><li className="listabout">EXPERIENCE</li></Link>
         <Link to="/education"> <li className="listabout">EDUCATION</li></Link>
         <Link to="/skills">  <li className="listabout">SKILLS</li></Link>
         <Link to="/project"> <li className="listabout">PROJECT</li></Link>
         <Link to="/intrest"> <li className="listabout">INTREST</li></Link> 
         </ul>
         </nav>
    )
};
};

export default  NavBar;