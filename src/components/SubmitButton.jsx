import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";


const SubmitButton = ({ handleFormSubmit }) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Obtener Cotización",
    english: "Get Quote"
  }

  return (
    <button id="submitButton" onClick={handleFormSubmit}>
      {buttonText[language]}
    </button>
  );
};

export default SubmitButton;
