import React from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";


const Resume = () => {
  return (
    <div className="App" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <iframe
        src="/files/resume.pdf"
        title="Resume"
        width="65%"
        height="80%"
        style={{ border: "1px solid black", marginBottom: "40px" }}
      ></iframe>
      <br />
      <Link to="/" className="link">
        Back to homescreen
      </Link>
    </div>
  );
};

export default Resume;
