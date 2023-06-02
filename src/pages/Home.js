import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import TimeComponent from "../TimeComponent";

function Home() {
  return (
    <div className="App">
      <h1>
        <em>DYLAN BOYER</em>
      </h1>
      <img src="https://i.imgur.com/d2a4F3Q.jpg" width="250px" alt=""></img>
      <br></br>
      <i>
        <TimeComponent />
      </i>
      <p>
        <Link to="/about" className="link">
          about
        </Link>
        &nbsp;//&nbsp;
        <a
          className="link"
          href="https://drive.google.com/file/d/1DAYtIy8WdGZBlvZUJrBNU1YP39qFtK7e/view?usp=sharing"
          target="_blank"
        >
          resume
        </a>
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
