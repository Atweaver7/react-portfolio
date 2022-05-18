import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/pictures/BartenderBlitz.png";
import img2 from "../assets/pictures/Budget-Tracker.jpeg";
import img3 from "../assets/pictures/Note-Taker.gif";
import img4 from "../assets/pictures/Employee-Tracker.gif";
import img5 from "../assets/pictures/BartenderBlitz.png";
import img6 from "../assets/pictures/BartenderBlitz.png";


function Portfolio() {
  let cards = [
    {
      title: "Budget Tracker",
      description:
        "A simple app created for use on or offline.  Use to keep track of your incoming and outgoing cash.",
      img: img2,
    },
    {
      title: "Note Taker",
      description:
        "A lightweight app to take notes",
      img: img3,
    },
    {
      title: "Bartender Blitz",
      description:
        "An app designed to help you pick a drink depending on what type of liquor you have available.",
      img: img1
    },
    {
      title: "TFT Compare",
      description:
        "An app created to compare two players in the League of Legends spinoff Team FIght Tactics.  A score is awarded bases on current stats and a winner is calculated.",
      img: "",
    },
    {
      title: "Coding Quiz!",
      description:
        "A quick a fun quiz app built with basic JS / HTML / CSS",
      img: "",
    },
    {
      title: "Employee Tracker",
      description:
        "An app created for small business owners to keep track of departments / employees / salaries.",
      img: img4,
    },
  ];

  return (
    <div className="container" >
      <h1 className="portfolio-title text-center"> My Work </h1>
      <div className="row">
        {cards.map((currentValue, index) => {
          return (
            <ProjectCard
              key={index}
              title={currentValue.title}
              description={currentValue.description}
              img={currentValue.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
