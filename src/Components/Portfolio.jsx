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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe created with HTML, CSS, and Javascript and deployed with Surge.sh. Made to be a 2-player.",
    link: "https://github.com/JBenKaplan/u1_hw_tic_tac_toe",
    url: "https://ttt-bk.surge.sh/",
  },
  {
    title: "Checkers",
    description:
      "Another simple web game created with HTML, CSS, and Javascript. First school project.",
    link: "https://github.com/JBenKaplan/Checkers",
    url: "https://checkers-bk.surge.sh/",
  },
  {
    title: "Computer Workbench",
    description:
      "A computer creation tool inspired by pcpartpicker. Deployed with heroku using HTML, CSS, JS, React, Node.js, MongoDB, and Express.",
    link: "https://github.com/JBenKaplan/Computer-Workbench",
    url: "https://computer-workbench.herokuapp.com/",
  },
  {
    title: "Foliage Friends",
    description:
      "Plant tracking app created using Postgresql, Express, React, and Node.js. Hand-rolled user registration and authentication to save user specific data. Deployed with heroku.",
    link: "https://github.com/JBenKaplan/foliage-friends-app-frontend",
    url: "https://foliage-friends.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2 className="portfolio-title">Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
      </div>
      <div className="container">
        {projectList.map((project) => (
                <div className="box" key={project.title}>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <h4>Link</h4>
              </a>
                <a href={project.link} target="_blank" rel="noopener norefeffer">
                  <h4>Repo</h4>
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
