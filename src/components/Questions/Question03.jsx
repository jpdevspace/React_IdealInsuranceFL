import React, { useContext, useEffect, useState } from "react";
import { CardCentered, CardText } from "../Styled/Card";
import useRadioList    from "./useRadioList";
import NextButton      from "../NextButton";
import LanguageContext from "../../Context/LanguageContext";

const Question03 = ({ updateAnswer, currAnswer, goToNextQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const [ isValid, setIsValid ] = useState(false);
  const [ showValidationMsg, setShowValidationMsg ] = useState(false);

  const incomeOpts = {
    tier1: "$0 - $15,000",
    tier2: "$15,001 - $20,000",
    tier3: "$20,001 - $25,000",
    tier4: "$25,001 - $30,000",
    tier5: "$30,001 - $35,000",
    tier6: "$35,001 - $40,000",
    tier7: "$45,001 - $50,000",
    tier8: "$50,001+",
  };

  const [ selection, IncomeRadioList ] = useRadioList("Income", currAnswer, incomeOpts);

  useEffect(() => {
    // Radio buttons can't be unselected, so if there's a selection
    // it's safe to make it true. Here selection is the label of the
    // selected element. e.g. "15001 - 20000"
    setIsValid(selection.length > 0);

    updateAnswer(selection, selection.length > 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, isValid]);

  const question = {
    spanish: {
      label: "Cuánto es el ingreso total de su hogar?",
      validation: "Por favor seleccione una de las opciones"
    },
    english: {
      label: "What is your total household income?",
      validation: "Please select one of the options"
    }
  };

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
    <CardCentered>
      <CardText>{question[language].label}</CardText>
      <IncomeRadioList />
      <small>{ validationMsg()  }</small>
      <div id="card-bottomRow">
        <NextButton goToNextQuestion={handleNext} />
      </div>
    </CardCentered>
  );
};

export default Question03;
