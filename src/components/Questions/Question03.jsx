import React, { Fragment, useEffect, useState } from "react";

const Question03 = ({ updateAnswer, income }) => {
  const [ checkedOpt, setCheckedOpt ] = useState("");

  useEffect(() => {
    if (income) {
      setCheckedOpt(income);
    }
  }, [income]);
  
  const language = "english";
  const question = {
    spanish: "Cuánto es el ingreso total de su hogar?",
    english: "What is your total household income?",
  };

  const handleChange = (e) => {
    const { id } = e.target;

    setCheckedOpt(id);

    updateAnswer(id);
  };

  const loadOpts = () => {
    let opts = [];
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

    for (const opt in incomeOpts) {
      opts.push(
        <Fragment key={opt}>
          <input
            onChange={(e) => handleChange(e)}
            type="radio"
            id={opt}
            name="income"
            value={incomeOpts[opt]}
            checked={opt === checkedOpt}
          />
          <label htmlFor={opt}>{incomeOpts[opt]}</label>
        </Fragment>
      );
    }

    return opts;
  };

  return (
    <>
      <h3>{question[language]}</h3>
      { loadOpts() }
    </>
  );
};

export default Question03;
