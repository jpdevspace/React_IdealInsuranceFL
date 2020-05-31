import React from "react";

const BackButton = ({ goToPrevQuestion }) => {
  return (
    <button id="backButton" onClick={goToPrevQuestion}>
      Back
    </button>
  );
};

export default BackButton;
