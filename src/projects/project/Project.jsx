import React, { useState } from "react";
import './Project.css';

const Java = ({ title, description }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [txtButton, setTxtButton] = useState("Read more");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
    setTxtButton(buttonClicked ? "Read more" : "Read less");
  };

  return (
    <>
      <div className={buttonClicked ? "cont-java-hover" : "cont-java"}>
        <h2>{title}</h2>
        <h3 className={buttonClicked ? "description-hover" : "description"}>
          {description}
        </h3>
        <button
          className={buttonClicked ? "visit-hover" : "visit"}
          onClick={handleButtonClick}>
          {txtButton}
        </button>
      </div>
    </>
  );
};

export default Java;
