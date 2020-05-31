import React from "react";

const NextButton = ({goToNextQuestion}) => {
  return (
    <button id="nextButton" onClick={goToNextQuestion}>
      Next
    </button>
  );
};

export default NextButton;
