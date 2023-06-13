import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <h1 className="wc">
          Welcome to <span className="blue">Daniel Lorenzo</span> portfolio
        </h1>
        <h2 className="presentation">
          I'm current <span className="blue">Computer Engineering</span> College Student
        </h2>
        <h2 className="presentation">
          I currently specialize in <span className="blue">Front End</span>{" "}
          development
        </h2>
      </div>
    </>
  );
};

export default Welcome;
