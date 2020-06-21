import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";


const SubmitButton = ({ submitForm }) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Obtener Cotización",
    english: "Get Quote"
  }

  return (
    <button id="submitButton" onClick={submitForm}>
      {buttonText[language]}
    </button>
  );
};

export default SubmitButton;
