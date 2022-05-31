import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import"../assets/styles/card.css";
import img1 from "../assets/pictures/BartenderBlitz.png";


function ProjectCard(props) {
  return (
    <div className="col-md-6 card ">
      <div className="">
        <h2 className="text-center  portfolio-title">{props.title}</h2>
        <p className="text-center">{props.description}</p>
        <img className="img-responsive rounded" src={props.img} alt={props.img}></img>
      </div>
    </div>
  );
}

export default ProjectCard;
