import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './component/Content/Contact';
import Profile from './component/Content/Profile';
import Project from './component/Content/Project';
import Skills from './component/Content/Skills';
import Sidebar from './component/Sidebar';
function App() {
  return (
    <Router>
      <Sidebar/>
      <Route exact path='/portof/' component={Profile}/>
      <Route exact path='/portof/skills' component={Skills}/>
      <Route exact path='/portof/project' component={Project}/>
      <Route exact path='/portof/contact' component={Contact}/>
    </Router>
  );
}

export default App;
