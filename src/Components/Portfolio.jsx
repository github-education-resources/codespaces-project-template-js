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
import image from "../images/fyi.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Magic with Linux Commands",
    description:
      "Start using Linuc operating system that allows you to outperfrom your system with multiple customization options available.",
    url: "https://dev.to/beingwizard/magic-with-linux-commands-47m1",
  },
  {
    title: "Safeguarding Your Cloud Environment: A Comprehensive Approach to Cloud Security",
    description:
      "AWS or any cloud has its multiple significance to build and create with but having a secure env is necessary, learn the steps before choosing any service.",
    url: "https://dev.to/beingwizard/safeguarding-your-cloud-environment-a-comprehensive-approach-to-cloud-security-1g52",
  },
  {
    title: "Microsoft Cloud Skill Challenge",
    description:
      "Empower Your Future: Get Certified through the Microsoft Cloud Skill Challenge",
    url: "https://dev.to/beingwizard/empower-your-future-get-certified-through-the-microsoft-cloud-skill-challenge-mpd",
  },
  {
    title: "Zero Shot Learning",
    description:
      "AI Learns from the data that you input, but sometimes it doesn't need your data to make any decision.",
    url: "https://www.linkedin.com/posts/wizardlocks_ai-data-learning-activity-7064072899871014912-WCT-?utm_source=share&utm_medium=member_desktop",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Articles</h2>
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
