import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../Context/LanguageContext";
import NextButton      from "../NextButton";
import { Card01, Img01, CardText, TextInput, TextInputLabel } from "../Styled/Card";
import FillFormSVG from "../../assets/fillForm.svg";

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
      zipCode: "Cuál es su código postal (zip code)",
      validation: "Por favor proveer un código postal válido"
    },
    english: {
      title: "Compare affordable plans and get the best coverage",
      zipCode: "What's your zip code?",
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
    <Card01>
      <CardText>{ q.title }</CardText>
      <Img01 src={FillFormSVG} alt="Person filling out a form" />

      <TextInputLabel>
        { q.zipCode }
        <TextInput
          onChange={e => setAnswer(e.target.value)}
          value={ answer }
          placeholder={q.zipCode}
          required 
          type="text"
          pattern="[0-9]*"
          maxLength="5"
        />
        <small>{ validationMsg()  }</small>
      </TextInputLabel>
      <NextButton goToNextQuestion={handleNext} />
    </Card01>
  );
};

export default Question01;
