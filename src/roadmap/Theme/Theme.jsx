import React from "react";
import { Link } from "react-router-dom";
import "./Theme.css";

const Theme = ({ url, title }) => {
  return (
    <>
      <a className="link" href={url} target="_blank">
        <div className="sect-tech">
          <div className="title">
            <h1>{title}</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default Theme;
