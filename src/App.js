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
    constructor(props) {
        super(props);
        this.state = {
        collapse: false
        }
     }
     collapsed=()=>{
         console.log("tssss")
        this.setState(coll=>{ 
            console.log(coll)
           return {collapse: !coll.collapse}
          })
     }

    render() {
        return (
            <div className="row">
                <Router>
                    <div id="collapseExample" className="col-sm-2" >
                        <NavBar collapse={this.state.collapse} />
                       
                    </div>
                    
                    <div className={this.state.collapse?`col-sm-10 `:"col-sm-12"}  >
                     
                    <button class="btn btn-info togl" onClick={this.collapsed} type="button" >
                      <i class="fas fa-bars"></i>
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