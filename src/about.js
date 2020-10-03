import React from 'react';
import './App.css';
import AboutMain from './aboutdetail';
import ExperienceMain from './ExperienceDetail';
import EducationMain from './educationDetail';
import SkillMain from './skillsDetail';
import NavBar  from'./nav';
import IntrestDetail    from './Intrestmain';
import ProjectDetail from './ProjectMain';


class AboutDetail extends React.Component{
 
  render(){
    console.log(this.props);
return (
      <div className="container ">
        <div className="path">
         <AboutMain/>
         </div>
         <div className="path">
         <ExperienceMain />
         </div>
         <div className="path">
         <EducationMain/>
         </div>
         <div className="path">
         < SkillMain/>
         </div>
         <div className="path">
         <ProjectDetail />
         </div>
         <div className="path">
         <IntrestDetail/>
         </div>
     </div>
    );
  }
};

export default AboutDetail;