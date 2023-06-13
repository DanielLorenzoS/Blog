import React from "react";
import './Project.css';

const Java = ({ title, description }) => {
  return (
    <>
      <div className="cont-java">
        <h2>{title}</h2>
        <h3 className="description">{description}</h3>
        <div className="visit">Read more</div>
      </div>
    </>
  );
};

export default Java;
