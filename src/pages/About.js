import React from "react";
import "../App.css";
import portrait from "../website portrait.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="App">
      <img src={portrait} className="portrait" alt="Portrait" />
      <br />
      <p className="bio">
        Dylan Boyer is currently a Sophomore at Purdue University in West
        Lafayette. He studies Computer Science while working part-time as a
        manager at Chipotle Mexican Grill. Dylan is interested in learning more
        about designing both the front and backend of web applications to pursue
        a career as a fullstack developer. His latest efforts include a
        focus-keeping website blocker using Python and studying data structures
        and algorithms for upcoming coding interviews.
      </p>
      <br />
      <Link to="/" className="link">
        Back to homescreen
      </Link>
    </div>
  );
};

export default About;
