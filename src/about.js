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
      <div className="container-fluid ">
         <AboutMain/>
         <ExperienceMain />
         <EducationMain/>
         < SkillMain/>
         <ProjectDetail />
         <IntrestDetail/>

      </div>
    );
  }
};

export default AboutDetail;