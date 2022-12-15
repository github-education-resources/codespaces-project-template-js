/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Projects</a>
      <a href="#contact">Contact</a>
      <a href="https://docs.google.com/document/d/1nirspLT8haICBpu5CjKy8mz-rnq622jA-H9OCtK70go" target="_blank">Resume</a>
    </div>
  );
};

export default Header;
