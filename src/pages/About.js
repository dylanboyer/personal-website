import React from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="App">
      <div className="about-container">
        <div className="bio">
          <p>
            I am currently a senior at Purdue specializing in systems development.
          </p>
          <ul>
            <li>Previous SWE intern at LinkedIn and Performance Services</li>
            <li>Current TA for CS 252</li>
            <li>
              Former developer for{" "}
              <a
                className="link"
                href="https://boilerexams.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boilerexams
              </a>
            </li>
          </ul>
          <p>
            In my free time, I enjoy studying Korean, weightlifting, running, and
            finding some great restaurants nearby :&#93;
          </p>
        </div>
        <div className="portrait">
          <img src="/files/headshot.png" alt="Portrait" />
        </div>
      </div>
      <br />
      <Link to="/" className="link">
        Back to homescreen
      </Link>
    </div>
  );
};

export default About;
