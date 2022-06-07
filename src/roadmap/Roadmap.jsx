import React from "react";
import "./Roadmap.css";
import Theme from "./Theme/Theme";
import html from "../icons/html.png";
import css from "../icons/css-3.png";
import js from "../icons/js.png";
import react from "../icons/physics.png";
import java from "../icons/java.svg";
import spring from "../icons/spring.png";
import python from "../icons/python.png";
import mysql from "../icons/mysql.png";
import terminal from "../icons/terminal.png";

const Blog = () => {
  return (
    <>
      <div className="publics">
        <Theme
          title={"Terminal"}
          image={terminal}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"HTML"}
          image={html}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"CSS"}
          image={css}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"JavaScript"}
          image={js}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"React.js"}
          image={react}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"Java"}
          image={java}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"Spring"}
          image={spring}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"Python"}
          image={python}
          cont={"What were my first steps?"}
        />
        <Theme
          title={"MySQL"}
          image={mysql}
          cont={"What were my first steps?"}
        />
      </div>
    </>
  );
};

export default Blog;
