import React from 'react';
import './App.css';
const SkillMain = props =>{
return (
      
       <div className="about-detail ">
 <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                    <span className="icon-disp ">
                     <i className="fab fa-angular"></i>
                     <span className="icon-n">Angular</span>

              </span>
              <span className="icon-disp ">
              <i className="fab fa-html5 ic"></i>
              <span className="icon-n">HTML5</span>
              </span>
              <span className="icon-disp ">
              <i className="fab fa-css3 ic"></i>
              <span className="icon-n">css3</span>
              </span>
              <span className="icon-disp ic">
              <i className="fab fa-js-square"></i>
              <span className="icon-n">js</span>
              </span>
              <span className="icon-disp ic">
              <i className="fab fa-bootstrap"></i>
              <span className="icon-n">bootstrap</span>
              </span>
              <span className="icon-disp ic">
              <i className="fab fa-react"></i>
              <span className="icon-n">react</span>
              </span>
              <span className="icon-disp ic ">
              <i className="fab fa-npm"></i></span>
              <span className="icon-n">npm</span>
                    </ul></div>
            </section>
        
       </div>
      
    );
};

export default  SkillMain;