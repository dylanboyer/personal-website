import React from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import TimeComponent from "../components/TimeComponent";

function Home() {
  return (
    <div className="App">
      <h1>
        <em>DYLAN BOYER</em>
      </h1>
      <div className="image">
        <img src="/files/scenery.png" alt="Scenery"></img>
      </div>
      <br></br>
      <i>
        <TimeComponent />
      </i>
      <p>
        <Link to="/about" className="link">
          about
        </Link>
        &nbsp;//&nbsp;
        <Link to="/resume" className="link">
          resume
        </Link>
        &nbsp;//&nbsp;
        <Link
          to="https://github.com/dylanboyer"
          className="link"
          target="_blank"
        >
          github
        </Link>
        &nbsp;//&nbsp;
        <Link to="/contact" className="link">
          contact
        </Link>
      </p>
    </div>
  );
}

export default Home;
