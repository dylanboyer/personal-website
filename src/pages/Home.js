import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="App">
        <h1>
          <em>DYLAN BOYER</em>
        </h1>
        <br></br>
        <img src="https://i.imgur.com/d2a4F3Q.jpg" width="250px" alt=""></img>
        <br></br>
        <p>
          <a href="/about">about</a>
          &nbsp;//&nbsp;
          <a
            href="https://drive.google.com/file/d/1F0tZv4nptVm5OuBKKmWgHvr-r6Qo7MSG/view?usp=sharing"
            target="_blank"
          >
            resume
          </a>
          &nbsp;//&nbsp;
          <a href="https://github.com/dylanboyer" target="_blank">
            github
          </a>
          &nbsp;//&nbsp;
          <a href="/contact">contact</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
