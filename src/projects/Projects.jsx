import React from "react";
import "./Projects.css";
import Project from "./project/Project";

const Portfolio = () => {
  let text = "In this job I learned to modify Spring Boot services, understand the logic of React Native components and test some projects from the user's point of view";
  return (
    <>
      <div className="cont-projects">
        <Project
          title={"Getechnologies"}
          description={text}
        />
      </div>
    </>
  );
};

export default Portfolio;
