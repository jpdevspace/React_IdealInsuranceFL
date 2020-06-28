import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";
import { ButtonLgBlue } from "./Button";

const NextButton = ({ goToNextQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Siguiente",
    english: "Next"
  }

  return (
    <ButtonLgBlue onClick={goToNextQuestion}>
      {buttonText[language]}
    </ButtonLgBlue>
  );
};

export default NextButton;
