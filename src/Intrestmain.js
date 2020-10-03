import React from 'react';
import { connect } from "react-redux";
class IntrestDetail extends React.Component{
  render(){
return (
  <div className="row">
          <div className="col-sm-12">
      <div className=" about-detail intrest">
     
<section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
      
                    <p>Apart from being a web developer, I enjoy most of the time to develop a new idea in front end animation with reference from google</p>
                    <p className="mb-0 mb-g">When forced indoors, I follow many sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
      </div>
      </div>
      </div>
    );

}
};


export default  connect(state=>state)(IntrestDetail);