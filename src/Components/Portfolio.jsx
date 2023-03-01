import React from "react";
import image1 from "../images/foas.png";
import image2 from "../images/dictionary.png";

const image1AltText = "skate map app";
const image2AltText = "dictionary page";

const projectList = [
  {
    title: "Find One And Skate",
    description:
      "Find One and Skate is a unique app for skateboarders that lets users discover, share, and connect with other skateboarders. The app features an interactive map that allows users to search for the best skateboarding spots, view photos and videos uploaded by other users, and add their own favorite spots to the map. By creating an account, users can save their favorite spots, leave comments and reviews, and connect with other skateboarders to create a supportive and inclusive community.",
    url: "https://github.com/charleslamb212/find-ONE-and-Skate-frontend",
  },
  {
    title: "Dictionary App",
    description:
      "A Dictionary app that displays any word as a result of a search. A full stack application where users can create an account, add words to favorites, and add comments.",
    url: "https://ject-2-test-deploy.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image1}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={image1AltText}
          />
          <img
            src={image2}
            style={{ height: "90%", width: "100%", objectFit: "cover", marginTop: "1rem" }}
            alt={image2AltText}
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
