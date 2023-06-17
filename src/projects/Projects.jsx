import React from "react";
import "./Projects.css";
import Project from "./project/Project";

const Portfolio = () => {
  let text = "According to the requirements, I supported in the layout, creation, or modification of components in both Angular and React Native. And I worked on the modification of Spring Boot and Quarkus services.";
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
