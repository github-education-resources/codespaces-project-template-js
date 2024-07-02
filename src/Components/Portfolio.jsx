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
<<<<<<< HEAD
import image from "../images/design-desk.jpeg";
=======
import image from "../images/portfolio_img.jpg";
>>>>>>> bfd4af7 (deployment)

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
<<<<<<< HEAD
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
=======
    title: "Threads",
    description:
      "Developed a web app for global interaction, utilizing Next.js, NodeJS, and MongoDB. Implemented real- time chat and notifications, enhancing user engagement and communication. Integrated user authentication and authorization using Clerk, ensuring secure and personalized user experiences.",
    url: "https://github.com/sayanbiswas0408/Threads",
  },
  {
    title: "Geargrid",
    description:
      "Developed an e-commerce app with Payload CMS and Next.js, boosting user engagement.Engineered a comprehensive admin panel featuring real-time analytics, inventory management, and order tracking, dramatically streamlining administrative processes and enhancing operational efficiency.",
    url: "https://github.com/sayanbiswas0408/GearGrid",
  },
  {
    title: "Mi Store",
    description:
      "Designed Mi Store website using React.js, HTML, CSS, JavaScript and React Bootstrap, for efficient component development and employed advanced optimization techniques to enhance website performance.",
    url: "https://github.com/sayanbiswas0408/Mi-Store",
  },
  {
    title: "YOLO-v8 License Plate Detection",
    description:
      "Remodeled YOLO-v8 model with Ultralytics for 95% accurate license plate detection in diverse environments.",
    url: "https://github.com/sayanbiswas0408/Object-Detection-YOLO",
>>>>>>> bfd4af7 (deployment)
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
