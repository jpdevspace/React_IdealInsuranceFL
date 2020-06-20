import React, { useContext, useEffect, useState } from "react";
import NextButton      from "../NextButton";
import LanguageContext from "../../Context/LanguageContext";

const Question01 = ({ updateAnswer, currAnswer, goToNextQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const [ answer, setAnswer ] = useState(currAnswer);
  const [ isValid, setIsValid ] = useState(false);
  const [ showValidationMsg, setShowValidationMsg ] = useState(false);

  useEffect(() => {
    if (answer.length === 5) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    updateAnswer(answer, isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, isValid]);

  const question = {
    spanish: {
      title: "Compare planes accequibles y obtenga la mejor cobertura",
      zipCode: "Código Postal (Zip Code)",
      validation: "Por favor proveer un código postal válido"
    },
    english: {
      title: "Compare affordable plans and get the best coverage",
      zipCode: "Zip Code",
      validation: "Please provide a valid zip code"
    }
  }

  const validationMsg = () => {
    let msg = null;

    if (showValidationMsg && !isValid) {
      msg = question[language].validation;
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

  const q = question[language];

  return (
    <>
      <h3>{ q.title }</h3>
      <label>
        { q.zipCode }
        <input
          onChange={e => setAnswer(e.target.value)}
          value={ answer }
          placeholder={q.zipCode}
          required 
          type="number" 
          maxLength="5"
        />
        <small>{ validationMsg()  }</small>
      </label>
      <div id="card-bottomRow">
        <NextButton goToNextQuestion={handleNext} />
      </div>
    </>
  );
};

export default Question01;
