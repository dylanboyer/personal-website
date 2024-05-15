import React from "react";
import "../App.css";
import "../index.css";
import portrait from "../website portrait.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="App">
      <div className="portrait">
        <img src={portrait} alt="Portrait" />
      </div>
      <br />
      <p className="bio">
        Dylan Boyer is currently a Junior at Purdue University in West
        Lafayette. He is currently an intern at Performance Services in Carmel,
        IN and is an undergraduate TA for CS 182 during the school year. Dylan
        is interested in learning more about backend development and working
        with AI. His latest efforts include working on the{" "}
        <a href="boilerexams.com">Boilerexams</a> team and working with NLP in
        Python.
      </p>
      <br />
      <Link to="/" className="link">
        Back to homescreen
      </Link>
    </div>
  );
};

export default About;
