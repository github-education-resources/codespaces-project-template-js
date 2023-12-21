/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/girl.jpg";

const imageAltText = "girl laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pathfinding Visualizer",
    description:
      "This project is made to understand the concepts of DSA while learning React js. This project demonstrates different path-finding algorithms like Dijksitra, BFS,DFS , Greedy etc",
    url: "https://vardapanchal005.github.io/Pathfinding-Visualizer/",
  },
  {
    title: "Sorting Visualizer",
    description:
      "This project is made to understand the concepts of DSA while learning React js. This project demonstrates different sorting algorithms like merge sort , bubble sort, heap sort and quick sort",
    url: "https://vardapanchal005.github.io/Sorting-Visualizer/",
  },
  {
    title: "WindBits",
    description:
      "This webpage's motto is to fetch the current atmospheric conditions from different cities around the world with pic of the city in the background. Tech stack used in the project are Openweather API,HTML,CSS and Javascript",
    url: "https://vardapanchal005.github.io/WindBits/",
  },
  {
    title: "QuickTick",
    description:
      "This website is made to understand and implement concepts of Blockchain. You can add or delete the task with MetaMask authorization to keep track of daily activities.",
    url: "https://github.com/VardaPanchal005/To-do",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
