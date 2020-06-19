import React, { useContext, useEffect } from "react";
import useRadioList from "./useRadioList";
import LanguageContext from "../../Context/LanguageContext";

const Question05 = ({ updateAnswer, currAnswer }) => {
  const [language] = useContext(LanguageContext);

  const label = {
    english: "Members included in coverage",
    spanish: "Miembros incluidos en la covertura"
  }

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

  const [selection, MembersInCoverageRadioList] = useRadioList(label[language], currAnswer, membersInCoverage[language]);

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
      <MembersInCoverageRadioList />
    </>
  );
};

export default Question05;
