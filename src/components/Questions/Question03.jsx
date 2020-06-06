import React, { useEffect } from "react";
import useRadioList from "./useRadioList";

const Question03 = ({ updateAnswer, currAnswer }) => {
  const incomeOpts = {
    tier1: "0 - 15000",
    tier2: "15001 - 20000",
    tier3: "20001 - 25000",
    tier4: "25001 - 30000",
    tier5: "30001 - 35000",
    tier6: "35001 - 40000",
    tier7: "45001 - 50000",
    tier8: "50001+",
  };

  const [ selection, IncomeRadioList, setSelection ] = useRadioList("Income", currAnswer, incomeOpts);

  useEffect(() => {
    // Radio buttons can't be unselected, so if there's a selection
    // it's safe to make it true
    updateAnswer(selection, selection.length > 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);
  
  const language = "english";
  const question = {
    spanish: "Cuánto es el ingreso total de su hogar?",
    english: "What is your total household income?",
  };

  return (
    <>
      <h3>{question[language]}</h3>
      <IncomeRadioList />
    </>
  );
};

export default Question03;
