import React from "react";
import "./Home.css";
import Welcome from "./welcome/Welcome";
import Techs from "./techs/Techs";

const Home = () => {
  return (
    <>
      <div className="home-content">
        <Welcome />
        <Techs />
      </div>
    </>
  );
};

export default Home;
