import React from 'react';
import AboutMain from './aboutdetail';
import ExperienceMain from './ExperienceDetail';
import EducationMain from './educationDetail';
import SkillMain from './skillsDetail';
import IntrestDetail from './Intrestmain';
import ProjectDetail from './ProjectMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './nav';
import AboutDetail from './about';
class App extends React.Component {
    render() {
        return (
            <div className="row">
                <Router>
                    <div id="collapseExample" className="col-sm-3" >
                        <NavBar />
                    </div>
                    <div className="col-sm-9">
                      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      <i class="fas fa-minus-square"></i>
                     </button>

                        <Switch>
                            <Route path="/about" component={AboutMain} />
                            <Route path="/experience" component={ExperienceMain} />
                            <Route path="/education" component={EducationMain} />
                            <Route path="/skills" component={SkillMain} />
                            <Route path='/Intrest' component={IntrestDetail} />
                            <Route path="/project" component={ProjectDetail} />
                            <Route path="/" component={AboutDetail} />


                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;