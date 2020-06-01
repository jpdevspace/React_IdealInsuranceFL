import React, { useState } from "react";

const Question02 = ({ updateAnswer, plan }) => {
  // TODO JP: Create a useEffect to load initial values for checkboxes
  const [ selected, setSelected ] = useState({
    health: false,
    dental: false,
    vision: false,
    medicare: false,
    lifeInsurance: false
  });
  const language = "english";
  const question = {
    spanish: "Qué tipo de plan está buscando? Marque todas las que apliquen.",
    english: "What type of plans are you looking htmlFor? Check all that apply.",
  };

  const handleChange = e => {
    const { checked, name } = e.target;
    setSelected({
      ...selected,
      [name]: checked
    });


    // TODO JP: create a string list with all chekd options to call updateAnswer()
  };

  return (
    <>
      <h3>{question[language]}</h3>
      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id="health"
        name="health"
        checked={selected.health}
      />
      <label htmlFor="health">
        {language === "english" ? "Health" : "Salud"}
      </label>

      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id="dental"
        name="dental"
        checked={selected.dental}
      />
      <label htmlFor="dental">Dental</label>

      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id="vision"
        name="vision"
        checked={selected.vision}
      />
      <label htmlFor="vision">Vision</label>

      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id="medicare"
        name="medicare"
        checked={selected.medicare}
      />
      <label htmlFor="medicare">Medicare</label>

      <input
        onChange={(e) => handleChange(e)}
        type="checkbox"
        id="lifeInsurance"
        name="lifeInsurance"
        checked={selected.lifeInsurance}
      />
      <label htmlFor="lifeInsurance">
        {language === "english" ? "Life insurance" : "Seguro de vida"}
      </label>
    </>
  );
};

export default Question02;
