import React, { useContext } from "react";
import { ButtonSubmit } from "./Styled/Button";
import LanguageContext from "../Context/LanguageContext";


const SubmitButton = ({ submitForm }) => {
  const [ language ] = useContext(LanguageContext);
  const buttonText = {
    spanish: "Obtener Cotización",
    english: "Get Quote"
  }

  return (
    <ButtonSubmit id="submitButton" onClick={submitForm}>
      {buttonText[language]}
    </ButtonSubmit>
  );
};

export default SubmitButton;
