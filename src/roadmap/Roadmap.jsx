import React from "react";
import "./Roadmap.css";
import Theme from "./Theme/Theme";

const Blog = () => {
  return (
    <>
      <div className="publics">
      <Theme
          className="theme"
          title={"PokeAPI Angular & Spring Boot with Authentication & Authorization"}
          url={"https://pokedex-ang.vercel.app/"}
        />
        <Theme
          className="theme"
          title={"PokeAPI CRUD React & Spring Boot"}
          url={"https://pokedex-oqxy.vercel.app/"}
        />
          <Theme
            className="theme"
            title={"PokeAPI CRUD Angular"}
            url={"https://angpokemons.netlify.app/"}
          />
        <Theme
          className="theme"
          title={"First Portfolio"}
          url={"https://daniellorenzos.github.io/Portafolio/"}
        />
        <Theme
          className="theme theme1"
          title={"Star Wars CRUD JavaScript"}
          url={"https://tranquil-moxie-09d591.netlify.app/"}
        />
      </div>
    </>
  );
};

export default Blog;