import React from "react";
import useTimeWidget from "./TimeWidget";

const MyComponent = () => {
  useTimeWidget("West_Lafayette_z13e");

  return (
    <>
      <a
        className="time-link"
        href="https://time.is/West_Lafayette"
        id="time_is_link"
        target="_blank"
        rel="nofollow"
      >
        TIME IN WEST LAFAYETTE, IN
      </a>
      {" - "}
      <span id="West_Lafayette_z13e"></span>
    </>
  );
};

export default MyComponent;
