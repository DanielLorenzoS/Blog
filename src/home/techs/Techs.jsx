import React from "react";
import "./Techs.css";
import html from "../../icons/html.png";
import css from "../../icons/css-3.png";
import js from "../../icons/js.png";
import react from "../../icons/physics.png";
import java from "../../icons/java.svg";
import spring from "../../icons/spring.png";
import python from "../../icons/python.png";
import mysql from "../../icons/mysql.svg";
import terminal from "../../icons/terminal.png";

const Blog = () => {
  return (
    <>
      <div className="blog">
        <h1>What do you find here?</h1>
        <h2>
          All my knowledge, problems and solutions on my career and projects
        </h2>
        <div className="imgs">
          <div className="pack">
            <img className="icon" src={java} alt="java" />
          </div>
          <div className="pack">
            <img className="icon" src={js} alt="js" />
          </div>
          <div className="pack">
            <img className="icon" src={python} alt="python" />
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
          <div className="pack">
            <img className="icon" src={terminal} alt="terminal" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
