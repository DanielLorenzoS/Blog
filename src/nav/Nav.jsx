import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [tab, setTab] = useState(0);
  const [color, setColor] = useState("fff");

  useEffect(() => {
    console.log("cambio");
  }, [tab]);

  return (
    <>
      <nav className="nav">
        <h1 className="nav-h1">LoreCode</h1>
        <div className="navs">
          <Link to="/">
            <h2 onClick={() => setTab(1)} className="nav1">
              Home
            </h2>
          </Link>
          <Link to="/blog">
            <h2 onClick={() => setTab(2)} className="nav2">
              Blog
            </h2>
          </Link>
          <Link to="/portfolio">
            <h2 onClick={() => setTab(3)} className="nav3">
              Projects
            </h2>
          </Link>
          <Link to="/roadmap">
            <h2 onClick={() => setTab(4)} className="nav4">
              My Roadmap
            </h2>
          </Link>
          <Link to="/contact">
            <h2 onClick={() => setTab(5)} className="nav5">
              Contact
            </h2>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
