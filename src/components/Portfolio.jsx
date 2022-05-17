import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  let cards = [
    {
      title: "Budget Tracker",
      description:
        "A simple app created for use on or offline.  Use to keep track of your incoming and outgoing cash.",
      img: "",
    },
    {
      title: "Note Taker",
      description:
        "A lightweight app to take notes",
      img: "",
    },
    {
      title: "Bartender Blitz",
      description:
        "An app designed to help you pick a drink depending on what type of liquor you have available.",
      img: "",
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
      img: "",
    },
  ];

  return (
    <div class="container" >
      <h1 className="portfolio-title"> My Work </h1>
      <div class="row">
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
