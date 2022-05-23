import React from "react";
// import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutMe from "./components/About-me";
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import Background from "./components/Background";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Background/> */}

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
          <Route path="/resume">
              <Resume/>
          </Route>
          
          
          <Route path="/">
              <Body/>
          </Route>
        </Switch>
              <Footer/>

        
      </div>
    </Router>
  );
}

export default App;
