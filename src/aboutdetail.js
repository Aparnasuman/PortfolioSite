import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchStars} from './Actions/simpleAction'
class AboutMain extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let i = 0;
    this.props.fetchStars("Freshup")
    // setInterval(()=>{
    //   this.props.simpleAction(i++)
    // }, 1000)
  }
  render(){
return (
      
       <div className="about-detail">
  <section className="resume-section " id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        APARNA
                        <span className="text-primary">Suman</span>
                    </h1>
                    <div className="subheading mb-5">
                    RIVER VALLY COLONY SITAMARHI BIHAR ,+(91)9304514771 ,
                    <Link to="/Aparnasuman2@gmail.com">AparnaSuman2@gmail.com</Link>
                    </div>
                    <p className="lead mb-5">I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with ReactJS and Angular. I also have experience working with PHP, HTML, CSS and Javascript. Take a look at my work or get in touch!</p>
                    <div className="social-icons ">
                    <span className="icon-display linkedin">
                      <i className="fab fa-linkedin-in"></i></span>
                      <span className="icon-display github">
                        <i className="fab fa-github"></i></span>
                        <span className="icon-display env">
                       <i className="far fa-envelope"></i></span>
                       <span className="icon-display fb">
                        <i className="fab fa-facebook-f"></i></span>
                    </div>
                </div>
            </section>
       </div>
      
    );
  }
};
 
export default  connect(null, {fetchStars})(AboutMain);
