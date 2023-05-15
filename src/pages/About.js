import React from "react";
import "../App.css";
import portrait from "../website portrait.jpg";

const About = () => {
  return (
    <div className="wrapper">
      <div className="App">
        <img src={portrait} height="200px" alt="Portrait" />
        <br />
        <p className="bio">
          Dylan Boyer is currently a Sophomore at Purdue University in West
          Lafayette. He studies Computer Science while working part-time as a
          manager at Chipotle Mexican Grill. Dylan is interested in learning
          more about designing both the front and backend of web applications to
          pursue a career as a fullstack developer. His latest efforts include
          creating this website and learning C++ to expand upon his C knowledge.
        </p>
        <br />
        <br />
        <a href="/">Back to homescreen</a>{" "}
      </div>
    </div>
  );
};

export default About;
