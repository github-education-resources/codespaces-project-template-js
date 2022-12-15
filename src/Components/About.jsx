/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/mosaic.svg";
let image = "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

const imageAltText = "coding window on laptop";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a software engineer, driven by growth, progress, learning and an ever deepening sense of contribution. Former experience as a project engineer and customer service associate grew my patience and ability to work with others.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  <img className="icon" src="https://img.icons8.com/ios-glyphs/512/html-5.png" alt="html" />, 
  <img className="icon" src="https://img.icons8.com/ios-glyphs/512/css3.png" alt="css" />, 
  <img className="icon" src="https://img.icons8.com/ios-glyphs/512/javascript.png" alt="js" />, 
  <img className="icon" src="https://img.icons8.com/ios-glyphs/512/react.png" alt="react" />, 
  <img className="icon" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="mongo" />, 
  <img className="icon" src="https://img.icons8.com/windows/512/nodejs.png" alt="node" />,
  <img className="icon" src="https://img.icons8.com/ios-glyphs/512/python.png" alt="python" />,
  <img className="icon" src="https://img.icons8.com/ios/512/flask.png" alt="flask" />,
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am comfortable planning-out and directing progress focused meetings as well as being flexible and working with others in small and large groups. Though I am an introvert by nature, I find it invigorating and enjoyable working with others toward a goal or on a project. I wake up every day ready to expand my skills and learn from others around me as well as searching how I can better the lives of those around me.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="about-background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <div
          style={{
            textAlign: "center",
            columns: 1,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
            <h2 className="icon-name">Skillset</h2>
            <br />
          <div className="icon-container">
          {skillsList.map((skill) => (
            <div className="icon" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
