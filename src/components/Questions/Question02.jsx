import React, { useContext, useState, useEffect } from "react";
import NextButton      from "../NextButton";
import LanguageContext from "../../Context/LanguageContext";

const Question02 = ({ updateAnswer, currAnswer, goToNextQuestion }) => {
  const [ selection, setSelection ] = useState(currAnswer);
  const [ language ] = useContext(LanguageContext);
  const [ isValid, setIsValid ] = useState(false);
  const [ showValidationMsg, setShowValidationMsg ] = useState(false);

  useEffect(() => {
    // Checks if user made a selection 
    // any of the values in the selection object is true.
    const isAnswered = Object.keys(selection).some(val => selection[val] === true);
    
    setIsValid(isAnswered);
  
    updateAnswer(selection, isAnswered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ selection, isValid ]);

  const question = {
    spanish: "Qué tipo de plan está buscando? Marque todas las que apliquen.",
    english: "What type of plans are you looking for? Check all that apply.",
  };

  const options = {
    spanish: {
      health: "Salud",
      dental: "Dental",
      vision: "Visión",
      medicare: "Medicare",
      lifeInsurance: "Seguro de Vida",
      validation: "Por favor seleccione al menos una de las opciones"
    },
    english: {
      health: "Health",
      dental: "Dental",
      vision: "Vision",
      medicare: "Medicare",
      lifeInsurance: "Life Insurance",
      validation: "Please select at least one of the options"
    }
  }

  const handleChange = e => {
    const { checked, name } = e.target;

    setSelection({
      ...selection,
      [name]: checked
    });
  };
  
  const validationMsg = () => {
    let msg = null;

    if (showValidationMsg && !isValid) {
      msg = options[language].validation;
    }

    return msg;
  }


  const handleNext = () => {
    if (isValid) {
      goToNextQuestion();
    } else {
      setShowValidationMsg(true);
    }
  }

  return (
    <>
      <h3>{question[language]}</h3>
        {
          Object.keys(currAnswer).map(opt => (
            <label htmlFor={opt} key={opt}>
              <input
                onChange={handleChange}
                type="checkbox"
                id={opt}
                name={opt}
                checked={selection[opt]}
              />
              { options[language][opt] }
            </label>
          ))
        }
        <small>{ validationMsg()  }</small>
        <div id="card-bottomRow">
          <NextButton goToNextQuestion={handleNext} />
        </div>
    </>
  );
};

export default Question02;
