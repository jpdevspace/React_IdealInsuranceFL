import React, { useContext } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Question01 = ({ updateAnswer, currAnswer }) => {
  const [ language ] = useContext(LanguageContext);

  const question = {
    spanish: {
      title: "Compare planes accequibles y obtenga la mejor cobertura.",
      zipCode: "Código Postal (Zip Code)"
    },
    english: {
      title: "Compare affordable plans and get the best coverage.",
      zipCode: "Zip Code"
    }
  }

  const handleChange = (e) => {
    const val = e.target.value;

    updateAnswer(val, val.length === 5);
  };

  const q = question[language];

  return (
    <>
      <h3>{ q.title }</h3>
      <label>
        { q.zipCode }
        <input
          onChange={e => handleChange(e)}
          value={ currAnswer ? currAnswer : "" }
          placeholder={q.zipCode}
          required 
          type="number" 
          maxLength="5"
        />
      </label>
    </>
  );
};

export default Question01;
