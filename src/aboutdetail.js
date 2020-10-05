import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStars } from './Actions/simpleAction'
class AboutMain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let i = 0;
    this.props.fetchStars("Freshup")
    // setInterval(()=>{
    //   this.props.simpleAction(i++)
    // }, 1000)
  }
  render() {
    return (
      <div className="row">
      <div className="col-sm-12">
      <div className="about-detail">
        <section className="resume-section " id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              APARNA
                        <span className="text-primary">Suman</span>
            </h1>
            <div className="subheading mb-5">
              RIVER VALLY COLONY SITAMARHI BIHAR ,+(91)9304514771 ,
                    AparnaSuman2@gmail.com
            </div>
            <p className="lead mb-5">I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with ReactJS and Angular. I also have experience working with PHP, HTML, CSS and Javascript. Take a look at my work or get in touch!</p>
            <div className="social-icons ">
              <span className="icon-display linkedin">
                <a href="https://www.linkedin.com/in/aparnasuman/">
                  <i className="fab fa-linkedin-in"></i></a></span>
              <span className="icon-display github">
                <a href="https://github.com/Aparnasuman">
                  <i className="fab fa-github"></i></a></span>
              <span className="icon-display env">
                <a href=" mailto:aparnasuman2@gmail.com">
                  <i className="far fa-envelope"></i></a></span>
              <span className="icon-display fb">
                <a href="https://www.facebook.com/aparna.suman.1/">
                  <i className="fab fa-facebook-f"></i></a></span>
            </div>
          </div>
        </section>
      </div>
</div>
</div>
    );
  }
};

export default connect(null, { fetchStars })(AboutMain);
