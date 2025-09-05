import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="App">
      I will only respond to emails that best fit my schedule and interests.
      <br /> <br /> <br />
      <p>
        personal: <i>dylan5160 (at) gmail.com </i>
        <br />
        professional: <i>dylanrboyer (at) gmail.com</i> <br />
        college: <i>boyer51 (at) purdue.edu</i>
        <br />
        <br />

        <i>
          <Link
            to="https://www.linkedin.com/in/dylanrboyer/"
            className="link"
            target="_blank"
          >
            LinkedIn
          </Link>
        </i>
      </p>
      <br />
      <br />
      <Link to="/" className="link">
        Back to homescreen
      </Link>
    </div>
  );
}

export default Contact;
