import React from "react";
import "./Techs.css";
import html from "../../icons/html.png";
import css from "../../icons/css-3.png";
import js from "../../icons/js.png";
import react from "../../icons/physics.png";
import java from "../../icons/java.svg";
import spring from "../../icons/spring.png";
import mysql from "../../icons/mysql.svg";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <h1>What technologies have I used?</h1>
        <h2>
          All my knowledge, problems and solutions on my career, projects and job
        </h2>
        <div className="imgs">
          <div className="pack">
            <img className="icon" src={java} alt="java" />
          </div>
          <div className="pack">
            <img className="icon" src={js} alt="js" />
          </div>
          <div className="pack">
            <img className="icon" src={mysql} alt="mysql" />
          </div>
          <div className="pack">
            <img className="icon" src={html} alt="html" />
          </div>
          <div className="pack">
            <img className="icon" src={css} alt="css" />
          </div>
          <div className="pack">
            <img className="icon" src={react} alt="react" />
          </div>
          <div className="pack">
            <img className="icon" src={spring} alt="spring" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
