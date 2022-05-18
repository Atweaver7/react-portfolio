import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import img1 from "../assets/pictures/BartenderBlitz.png";


function ProjectCard(props) {
  return (
    <div className="col-md-4">
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.img} alt={props.img}></img>
      </div>
    </div>
  );
}

export default ProjectCard;
