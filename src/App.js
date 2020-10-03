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
    constructor() {
        super();
        this.state = {
          sidebarOpen: false
        }
        this.handleViewSidebar = this.handleViewSidebar.bind(this);
      
      }
      handleViewSidebar() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }
    render() {
        const {sidebarOpen} = this.state;
        return (
            <div className="row">
                <Router>
                    <div  className="col-sm-2"  >
                    {sidebarOpen && <NavBar/>}
                    </div>
                    <div className="col-sm-10" >
                      <button onClick={ this.handleViewSidebar } class="btn btn-primary togl" type="button" >
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