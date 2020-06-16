import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Question02 = ({ updateAnswer, currAnswer }) => {
  const [ selection, setSelection ] = useState(currAnswer);
  const [ language ] = useContext(LanguageContext);

  useEffect(() => {
    // Checks if user made a selection 
    // any of the values in the selection object is true.
    const isAnswered = Object.keys(selection).some(val => selection[val] === true);
    
    updateAnswer(selection, isAnswered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ selection ]);

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
      lifeInsurance: "Seguro de Vida"
    },
    english: {
      health: "Health",
      dental: "Dental",
      vision: "Vision",
      medicare: "Medicare",
      lifeInsurance: "Life Insurance"
    }
  }

  const handleChange = e => {
    const { checked, name } = e.target;

    setSelection({
      ...selection,
      [name]: checked
    });
  };

  return (
    <>
      <h3>{question[language]}</h3>
      <form id="use-radioList-plans">
        {
          Object.keys(currAnswer).map(opt => (
            <label htmlFor={opt} key={opt}>
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                id={opt}
                name={opt}
                checked={selection[opt]}
              />
              { options[language][opt] }
            </label>
          ))
        }
      </form>
    </>
  );
};

export default Question02;
