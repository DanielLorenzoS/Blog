import React from "react";
import './Project.css';

const Java = ({ title, description, url }) => {
  return (
    <>
      <div className="cont-java">
        <h2>{title}</h2>
        <h3 className="description">{description}</h3>
        <a className="visit" target="_blank" rel="noopener noreferrer" href={url}>Visit Project</a>
      </div>
    </>
  );
};

export default Java;
