import React from 'react';
import './App.css';
class ExperienceMain extends React.Component{
   render(){
return (
      
       <div className="about-detail">
  <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">ASSOCIATE SOFTWARE TRAINEE</h3>
                            <div className="subheading mb-3 com">INFINITY LABS</div>
                            <p>Working with AngularJs,ReactJS and other tools to make beautiful,elegant and responsive website</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Jan 2020-PRESENT</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">WEB DEVELOPMENT INTERN</h3>
                            <div className="subheading mb-3 com">Omninons Solution</div>
                            <p>Worked with ReactJs and Php for making sophisticated website with all its features independentaly</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Jan 2019-July 2019</span></div>
                    </div>
                </div>
            </section>
       </div>
      
    );
}
};

export default  ExperienceMain;
