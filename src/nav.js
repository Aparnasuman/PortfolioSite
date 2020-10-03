import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
class NavBar extends React.Component { 
  render() {
    return (
    <nav className={this.props.collapse?`sidebar `:"sidebr-nav"} id="sidbar">
     
     <Link to="/">  <img src={logo} alt="Download" className={this.props.collapse?`img-fluid img-thumbnail rounded-circle m-3  `:" img-fluid-1 img-fluid img-thumbnail rounded-circle m-4 "}></img></Link>
        <ul className="list">
          <Link to="/about"><i  className={this.props.collapse?`di-1`:"fas fa-address-card icn"}></i></Link> <Link to="/about"><li className={this.props.collapse?`listabout `:"lis"} >ABOUT</li></Link>
          <Link to="/experience"><i  className={this.props.collapse?`di-1`:"fab fa-algolia icn"} ></i></Link> <Link to="/experience"> <li className={this.props.collapse?`listabout `:"lis"} >EXPERIENCE</li></Link>
          <Link to="/education"><i  className={this.props.collapse?`di-1`:" fas fa-archive icn "}></i> </Link> <Link to="/education"><li className={this.props.collapse?`listabout `:"lis"} >EDUCATION</li></Link>
          <Link to="/skills"> <i  className={this.props.collapse?`di-1`:"far fa-address-book icn"}></i> </Link> <Link to="/skills"><li  className={this.props.collapse?`listabout `:"lis"}>SKILLS</li></Link>
          <Link to="/project"><i  className={this.props.collapse?`di-1`:"fab fa-r-project icn "}></i></Link><Link to="/project"> <li className={this.props.collapse?`listabout `:"lis"} >PROJECT</li></Link>
          <Link to="/intrest"><i  className={this.props.collapse?`di-1`:"fas fa-map icn"}></i></Link>  <Link to="/intrest"><li  className={this.props.collapse?`listabout `:"lis"}>INTREST</li></Link>
        </ul>
      </nav>
    )
  };
};

export default NavBar;