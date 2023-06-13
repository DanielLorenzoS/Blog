import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
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
      </nav>
    </>
  );
};

export default Nav;
