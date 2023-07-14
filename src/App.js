import About from './component/About';
import Home from './component/Home';
import NavBar from './component/NavBar';
import './style.css'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './component/Projects';
import Footer from './component/Footer';
import Education from './component/Education';
import Achievements from './component/Achievements';
import Skills from './component/Skills';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/professionalcareer"><Home/></Route>
        <Route exact path="/projects"><Projects/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/education"><Education/></Route>
        <Route exact path="/achievements"><Achievements/></Route>
        <Route exact path="/skills"><Skills/></Route>
      </Switch>
      
      </Router>
      <Footer/>
    </>
  );
}

export default App;
