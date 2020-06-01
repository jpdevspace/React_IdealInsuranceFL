import React from "react";

const Question01 = ({ updateAnswer, zipCode }) => {
  const language = "english";
  const question = {
    spanish: "Compare planes accequibles y obtenga la mejor cobertura.",
    english: "Compare affordable plans and get the best coverage." 
  }

  return (
    <>
      <h3>{ question[language] }</h3>
      <input
        onChange={e => updateAnswer(e.target.value)}
        value={ zipCode ? zipCode : "" }
        placeholder="Zip Code"
        required 
        type="number" 
        maxLength="5"
      />
    </>
  );
};

export default Question01;
