import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="App">
      <h2>This is a 404 page.</h2>
      <p>
        The page you are looking for is either unavailable or does not exist.
        <br /> <br />
        <Link to="/">Back to homepage</Link>
      </p>
    </div>
  );
}

export default NoPage;
