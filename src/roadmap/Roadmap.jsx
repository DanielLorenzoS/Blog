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
import mysql from "../icons/mysql.svg";
import terminal from "../icons/terminal.png";

const Blog = () => {
  return (
    <>
      <div className="publics">
        <Theme
          title={"Java"}
          image={java}
          url={"/java"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"HTML"}
          image={html}
          url={"/html"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"CSS"}
          image={css}
          url={"/css"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"JavaScript"}
          image={js}
          url={"/javascript"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"React.js"}
          image={react}
          url={"/react"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"Spring"}
          image={spring}
          url={"/spring"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"Terminal"}
          image={terminal}
          url={"/terminal"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"Python"}
          image={python}
          url={"/python"}
          cont={"Watch this roadmap"}
        />
        <Theme
          title={"MySQL"}
          image={mysql}
          url={"/mysql"}
          cont={"Watch this roadmap"}
        />
      </div>
    </>
  );
};

export default Blog;
