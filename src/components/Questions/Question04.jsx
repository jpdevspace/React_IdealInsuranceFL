import React, { useContext, useEffect } from "react";
import useRadioList from "./useRadioList";
import LanguageContext from "../../Context/LanguageContext";

const Question04 = ({ updateAnswer, currAnswer }) => {
  const [ language ] = useContext(LanguageContext);

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
    updateAnswer(selection, selection.length > 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);

  const question = {
    spanish: "Cuántas personas habitan en su casa?",
    english: "How many people live in your household?",
  };

  return (
    <>
      <h3>{question[language]}</h3>
      <HouseHoldSizeRadioList />
    </>
  );
};

export default Question04;
