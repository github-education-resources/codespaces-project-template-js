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
import image from "../images/comp.avif";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "iWeather",
    description:
      "It provides real-time weather updates based on user location input.Integrated third-party APIs to display accurate weather data and forecasts, enhancing user experience and engagement.",
    url: "https://himanshu08kumar.github.io/WeatherApp/",
  },
  {
    title: "PrepIT",
    description:
      "Developed a comprehensive Android application using Android Studio to assist students in their placement preparations. Managed and curated a diverse set of placement questions, creating a valuable resource for students.",
    url: "https://github.com/Himanshu08Kumar/PrepIt",
  },
  {
    title: "Notepad",
    description:
      "Designed an intuitive user interface, prioritizing ease of use for note creation and management. Integrated Firestore Database to enable cloud-based storage, ensuring data accessibility across devices.",
    url: "https://github.com/Himanshu08Kumar/Notepad",
  },
  {
    title: "Home Automation System",
    description:
      "Designed and implemented an intuitive system for efficient control and monitoring of household devices. Ensured power-saving measures through centralized control and automation.",
    url: "https://github.com/Himanshu08Kumar/IOT-Home-Automation",
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
