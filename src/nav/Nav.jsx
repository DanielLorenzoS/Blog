import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <>
      <nav className="nav">
        <h1 className="nav-h1">Portfolio</h1>
        <div className="navs">
          <Link to="/">
            <h2 className="nav-h2">Home</h2>
          </Link>
          <Link to="/roadmap">
            <h2 className="nav-h2">Projects</h2>
          </Link>
          <Link to="/projects">
            <h2 className="nav-h2">Experience</h2>
          </Link>
          <Link to="/contact">
            <h2 className="nav-h2">Contact</h2>
          </Link>
        </div>
        <button className={buttonClicked ? "nav-res-button nav-res-button-clicked" : "nav-res-button"}
          onClick={handleButtonClick}>
          <div className={buttonClicked ? "image image-clicked" : "image"}></div>
          <div className={buttonClicked ? "image2 image2-clicked" : "image2"}></div>
          <div className={buttonClicked ? "image3 image3-clicked" : "image3"}></div>
        </button>
        <div className={buttonClicked ? "nav-res-clicked" : "nav-res"}
          onClick={handleButtonClick}>
          <Link to="/">
            <h2 className="nav-h2">Home</h2>
          </Link>
          <Link to="/roadmap">
            <h2 className="nav-h2">Projects</h2>
          </Link>
          <Link to="/projects">
            <h2 className="nav-h2">Experience</h2>
          </Link>
          <Link to="/contact">
            <h2 className="nav-h2">Contact</h2>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
