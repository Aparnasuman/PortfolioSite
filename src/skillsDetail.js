import React from 'react';
import './App.css';
const SkillMain = props =>{
return (
      <div className="row">
          
      <div className="col-sm-12">
       <div className="about-detail ">
 <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                    <span className="icon-disp ">
                     <i className="fab fa-angular ic"></i>
                    
                     </span>
                     <span className="icon-nm">angular</span>
                 <span className="icon-disp ">
                 <i className="fab fa-html5 ic"></i>
                 </span>
                 <span className="icon-nm-1">HTML5</span>
              <span className="icon-disp ">
              <i className="fab fa-css3 ic"></i>
             
              </span>
              <span className="icon-nm-2">CSS3</span>
              <span className="icon-disp ic">
              <i className="fab fa-js-square"></i>
          
              </span>
              <span className="icon-nm-3">JS</span>
              <span className="icon-disp ic">
              <i className="fab fa-bootstrap"></i>
             
              </span>
              <span className="icon-nm-4">Bootstrap</span>
              <span className="icon-disp ic">
              <i className="fab fa-react"></i>
            
              </span>
              <span className="icon-nm-5">React</span>
              <span className="icon-disp ic ">
              <i className="fab fa-npm"></i></span>
              <span className="icon-nm-6">Node</span>
                    </ul></div>
            </section>
        
       </div>
      </div>
      </div>
    );
};

export default  SkillMain;