import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './component/Content/Contact';
import Education from './component/Content/Education';
import Profile from './component/Content/Profile';
import Project from './component/Content/Project';
import Skills from './component/Content/Skills';
import Sidebar from './component/Sidebar';
function App() {
  return (
    <Router>
      <Sidebar/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/skills' component={Skills}/>
      <Route exact path='/education' component={Education}/>
      <Route exact path='/project' component={Project}/>
      <Route exact path='/contact' component={Contact}/>
    </Router>
  );
}

export default App;
