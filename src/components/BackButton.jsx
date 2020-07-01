import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";
import { ButtonSmGrey } from "./Styled/Button";

;

const BackButton = ({ goToPrevQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Atrás",
    english: "Back"
  }

  return (
    <ButtonSmGrey id="backButton" onClick={goToPrevQuestion}>
      {buttonText[language]}
    </ButtonSmGrey>
  );
};

export default BackButton;
