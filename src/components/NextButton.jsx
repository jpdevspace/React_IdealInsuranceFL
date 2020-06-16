import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";


const NextButton = ({goToNextQuestion}) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Siguiente",
    english: "Next"
  }

  return (
    <button id="nextButton" onClick={goToNextQuestion}>
      {buttonText[language]}
    </button>
  );
};

export default NextButton;
