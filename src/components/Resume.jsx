import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import"../assets/styles/resume.css";


function Resume() {
  return (

  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="title text-center">
          <h1>Aaron Weaver</h1>
          <h3>Fullstack Developer</h3>
          <h4><a href=""></a></h4>
          <hr />
          <ul class="list-inline">
            <li><i class="devicon-laravel-plain colored"></i></li>
            <li><i class="devicon-javascript-plain colored"></i></li>
            <li><i class="devicon-html5-plain colored"></i></li>
            <li><i class="devicon-angularjs-plain colored"></i></li>
            <li><i class="devicon-linux-plain"></i></li>
          </ul>
        </div>
        
        <div class="summary">
          <h2 class="text-center">Summary</h2>
          <p>An entry level Full Stack Web Developer hungry to learn and tackle any coding challenges available to me.  Background in leadership roles in the Logistics and Transportation industries.</p>
          
          <div class="row">
            <div class="col-md-3 col-sm-3">
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p>React</p>
              <p>Node</p>
              <p>Express</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p>Project Management</p>
              <p></p>
              <p>Frontend Development</p>
            </div>
            <div class="col-md-3 col-sm-3">
              <p>Code Review</p>
              <p>Peer Review</p>
              <p>Fullstack Development</p>
            </div>
          </div>
          
        </div>
        
        
      
        <div class="work-experience">
          <h2 class="text-center">Work Experience</h2>
          <div class="row experience-title">
            <div class="col-md-9">
              <h3>UC Davis</h3>
              <h4>Full Stack Development Program</h4>
              <h5>Graduated June 2022</h5>
            </div>
            <div class="col-md-3">
              <h3>November 2017 - Nove</h3>
            </div>
          </div>
          <div class="row experience-summary">
            <div class="col-md-12">
              <p></p>
            </div>
          </div>
          
          <div class="row experience-title">
            <div class="col-md-9">
              <h3>Some company</h3>
              <h4>Associate Project Manager</h4>
              <h5>Some project</h5>
            </div>
            <div class="col-md-3">
              <h3>Oct 2012 - Jun 2015</h3>
            </div>
          </div>
          <div class="row experience-summary">
            <div class="col-md-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sequi voluptatibus similique repellat, qui officiis excepturi odit esse magni veritatis voluptatum iste molestias illum labore fugit nihil, modi inventore. Excepturi!:</p>
              <ul>
                <li>Lead - UI design and development.</li>
                <li>WordPress expert - Configuration, maintenance and custom development.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    
  )
}

export default Resume;
