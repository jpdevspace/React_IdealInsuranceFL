import React, { useContext, useEffect, useState } from "react";
import useRadioList from "./useRadioList";
import NextButton   from "../NextButton";
import LanguageContext from "../../Context/LanguageContext";

const Question05 = ({ updateAnswer, currAnswer, goToNextQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const [ isValid, setIsValid ] = useState(false);
  const [ showValidationMsg, setShowValidationMsg ] = useState(false);
  
  const question = {
    spanish: {
      label: "Miembros incluidos en la covertura",
      validation: "Por favor seleccione una de las opciones"
    },
    english: {
      label:  "Members included in coverage",
      validation: "Please select one of the options"
    }
  };

  const membersInCoverage = {
    english: {
      1: "Only me",
      2: "Spouse and me",
      3: "Children and me",
      4: "Spouse, children and me"
    },
    spanish: {
      1: "Solo yo",
      2: "Pareja y yo",
      3: "Hijos y yo",
      4: "Pareja, hijos y yo"
    }
  }
  const [selection, MembersInCoverageRadioList] = useRadioList(question[language].label, currAnswer, membersInCoverage[language]);

  useEffect(() => {
    // Radio buttons can't be unselected, so if there's a selection
    // it's safe to make it true. Here selection is the label of the
    // selected element. e.g. "9"
    setIsValid(selection.length > 0);

    updateAnswer(selection, selection.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, isValid]);

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

  return (
    <>
      <h3>{question[language].label}</h3>
      <MembersInCoverageRadioList />
      <small>{ validationMsg()  }</small>
      <div id="card-bottomRow">
        <NextButton goToNextQuestion={handleNext} />
      </div>
    </>
  );
};

export default Question05;
