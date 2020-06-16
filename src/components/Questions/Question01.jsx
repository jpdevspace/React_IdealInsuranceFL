import React, { useContext } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Question01 = ({ updateAnswer, currAnswer }) => {
  const [ language ] = useContext(LanguageContext);

  const question = {
    spanish: "Compare planes accequibles y obtenga la mejor cobertura.",
    english: "Compare affordable plans and get the best coverage." 
  }

  const handleChange = (e) => {
    const val = e.target.value;

    updateAnswer(val, val.length === 5);
  };

  return (
    <>
      <h3>{ question[language] }</h3>
      <input
        onChange={e => handleChange(e)}
        value={ currAnswer ? currAnswer : "" }
        placeholder="Zip Code"
        required 
        type="number" 
        maxLength="5"
      />
    </>
  );
};

export default Question01;
