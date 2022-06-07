import React from "react";
import "./Projects.css";
import Project from "./project/Project";

const Portfolio = () => {
  return (
    <>
      <div className="cont-projects">
        <Project
          title={"First CRUD Star Wars"}
          description={
            "In this CRUD you can select your favorite Star Wars character to" +
            " your favorites section and from there choose one and delete it." +
            " For this code I use HTML, CSS & JavaScript vanilla"
          }
          url={"https://daniellorenzos.github.io/StarWars/"}
        />
      <Project
          title={"Second CRUD Pokemons"}
          description={
            "In this CRUD you can select your favorite Pokemon to" +
            " your favorites collection and from there choose one and delete it." +
            " For this code I use React.js (React Router and Context API) and " +
            " styles components"
          }
          url={"https://rpokemon.netlify.app/"}
        />
      </div>
    </>
  );
};

export default Portfolio;
