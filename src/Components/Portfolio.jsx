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
    title: "Technocolabs - Front-End Web Development Intern",
    description:
      "Worked on a project to build a web application to predict the price of a used car based on various features using Machine Learning.",
    url: "https://drive.google.com/file/d/1DSjSUK2rK1b0BkxZsUhPiOfSyQ6ZhuOU/view?usp=sharing",
  },
  {
    title: "Google Developer Student Club Lead",
    description:
      "Lead the club to conduct various events and workshops to help students learn and grow.",
  },
  {
    title: "My Resume",
    description:
     "This resume includes my experience and position of responsibilities.",
    url: "https://drive.google.com/file/d/1gM-NdzyoEg5EMNDGa7WUpUXzHrxQ_kko/view?usp=sharing",
  },
  {
    title: "MedPill Website - Future Ready Talent Project",
    description:
      "Worked on a project to build a website for a startup to help them reach out to more customers.",
    url: "https://youtu.be/q6AnabFthJ0"
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
