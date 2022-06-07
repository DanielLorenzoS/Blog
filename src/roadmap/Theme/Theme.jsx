import React from "react";
import { Link } from "react-router-dom";
import "./Theme.css";

const Theme = ({ url, title, image, cont }) => {
  return (
    <>
      <Link className="link" to={url}>
        <div className="sect-tech">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="section">
            <img className="img-blog" src={image} alt="terminal" />
          </div>
          <div className="cont">
            {/* <h2>What were my first steps?</h2> */}
            <h2 className="nav-tech">{cont}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Theme;
