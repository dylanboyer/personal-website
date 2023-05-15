import React from "react";
import "../App.css";

function Contact() {
  return (
    <div className="wrapper">
      <div className="App">
        I will only respond to emails that best fit my schedule and interests.
        <br /> <br /> <br />
        email
        <p>
          personal: <i>dylan5160@gmail.com </i>
          <br />
          professional: <i>dylanrboyer@gmail.com</i> <br />
          college: <i>boyer51@purdue.edu</i>
          <br />
          <br />
        </p>
        linkedin
        <p>
          <i>
            <a href="https://www.linkedin.com/in/dylanrboyer/" target="_blank">
              connect with me!
            </a>
          </i>
        </p>
        <br />
        <br />
        <a href="/">Back to homescreen</a>{" "}
      </div>
    </div>
  );
}

export default Contact;
