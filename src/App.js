import React from "react";
// import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutMe from "./components/About-me";
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/about">
              <AboutMe />
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/portfolio">
              <Portfolio/>
          </Route>
          <Route path="/">
              <Body/>
          </Route>
        </Switch>

        
      </div>
    </Router>
  );
}

export default App;
