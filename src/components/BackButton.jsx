import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";


const BackButton = ({ goToPrevQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Atrás",
    english: "Back"
  }

  return (
    <button id="backButton" onClick={goToPrevQuestion}>
      {buttonText[language]}
    </button>
  );
};

export default BackButton;
