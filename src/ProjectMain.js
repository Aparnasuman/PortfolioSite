import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { fetchStars } from './Actions/simpleAction'
class ProjectDetail extends React.Component {
  state = {
    rep: []

  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/Aparnasuman/repos`)
      .then(res => {
        const rep = res.data;
        console.log(rep);
        this.setState({ rep });
      })
  }
  checkstar = (repo) => {
    this.props.fetchStars(repo)


  }
  getStars = repo => {
    const repoDetails = this.props.simpleReducer.stars.find(el=>el.repo_id===repo);
    console.log(repoDetails);
    return repoDetails?.stars?.length;
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
      <div className=" about-detail ">
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">PROJECT</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  <ul>
                    {this.state.rep.map((repo) =>
                      <li className="new" key={repo.id}>
                        
                        {repo.name} <button className="button-primary new-button" onClick={() => this.checkstar(repo.name)}>☆</button>
                        <span> check stars: {this.getStars(repo.name)}</span>
                        <p className="subheadings mb-3 ms-c"> {repo.description}</p>
                      </li>
                    )}

                  </ul>
                </h3>
                {/*<div className="subheading mb-3">A web Application for online marketplace which provides local services like repair & maintenance,cleaning service,home-care services,business services and many more</div>
                            <div>Provide scalable services by adding own service as necessary </div>
                    <p>Frontend is developed in ReactJS For faster rendering and easy maintenance </p>*/}
              </div>
            </div>
            {/*<div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0"> MovieSearchApp</h3>
                            <div className="subheading mb-3">A website implemented for searching details of movie on various search engine</div>
                            <div>Designed using HTML,CSS and JavaScript so that it can be run without any installation or any platform </div>
        
                        </div>
                      
</div>*/}
          </div>
        </section>
      </div>
      </div>
      </div>
    );
  }
};


export default connect(state => state, { fetchStars })(ProjectDetail);