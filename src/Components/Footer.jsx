/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import microsoftIcon from "../images/socials/microsoft.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    microsoft,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`}>
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`}>
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`}>
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`}>
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`}>
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {microsoft && (
          <a href={`https://learn.microsoft.com/users/${microsoft}`}>
            <img src={microsoftIcon} alt="Microsoft" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`}>
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a href={`https://www.youtube.com/c/${youTube}`}>
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

export default Footer;
