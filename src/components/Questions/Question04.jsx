import React, { useContext, useEffect, useState } from "react";
import { CardCentered, CardText } from "../Card";
import useRadioList    from "./useRadioList";
import NextButton      from "../NextButton";
import LanguageContext from "../../Context/LanguageContext";

const Question04 = ({ updateAnswer, currAnswer, goToNextQuestion }) => {
  const [ language ] = useContext(LanguageContext);
  const [ isValid, setIsValid ] = useState(false);
  const [ showValidationMsg, setShowValidationMsg ] = useState(false);

  const houseHoldSizeOpts = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10"
  };

  const [ selection, HouseHoldSizeRadioList ] = useRadioList("House Hold Size", currAnswer, houseHoldSizeOpts);

  useEffect(() => {
    // Radio buttons can't be unselected, so if there's a selection
    // it's safe to make it true. Here selection is the label of the
    // selected element. e.g. "9"
    setIsValid(selection.length > 0);

    updateAnswer(selection, selection.length > 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, isValid]);

  const question = {
    spanish: {
      label: "Cuántas personas habitan en su casa?",
      validation: "Por favor seleccione una de las opciones"
    },
    english: {
      label:  "How many people live in your household?",
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
      <HouseHoldSizeRadioList />
      <small>{ validationMsg()  }</small>
      <div id="card-bottomRow">
        <NextButton goToNextQuestion={handleNext} />
      </div>
    </CardCentered>
  );
};

export default Question04;
