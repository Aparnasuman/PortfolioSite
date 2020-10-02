import React from 'react';
import './App.css';
class EducationMain extends React.Component{
   render(){
return (
      
       <div className="about-detail  education ">
 <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Guru Nanak Dev Engineering Collage</h3>
                            <div className="subheading mb-3">BACHALOR OF COMPUTER SCIENCE</div>
                            <div>Computer Science - Web Development </div>
                            <p>CGPA: 7.91</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2016 - May 2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Sant LongoWal Institute of Engineering & Technology</h3>
                            <div className="subheading mb-3">DIPLOMA IN COMPUTER Application</div>
                            <div>Computer Science - Computer Application </div>
                            <p>PERCENTAGE: 81%/100%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 20012 - May 20016</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">JESUS AND MARRY ACADEMY</h3>
                            <div className="subheading mb-3">TENTH </div>
                            <div>  Major- Physics Chemistry Math</div>
                            <p>CGPA: 9.0</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 20011 - May 20012</span></div>
                    </div>
                </div>
            </section>
       </div>
      
    );
}
};

export default  EducationMain;