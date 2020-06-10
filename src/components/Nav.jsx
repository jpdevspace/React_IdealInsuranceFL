import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";

const Nav = () => {
  const [ language, setLanguage ] = useContext(LanguageContext);
  const text = {
    english: "Call a licensed agent",
    spanish: "Llama a un agente con licencia"
  }
  // These need to be backwards because you wanna change to the other language
  const button = {
    spanish: "We speak English",
    english: "Hablamos Español"
  }

  const changeLanguage = () => {
    if (language === "spanish") {
      setLanguage("english");
    } else {
      setLanguage("spanish");
    }
  }

  return (
    <div>
      <h1>Ideal Insurance FL</h1>
      <div>
        <h3>{text[language]}: +1 (786) 808-8134</h3>
        <button onClick={changeLanguage}>{button[language]}</button>
      </div>
    </div>
  );
};

export default Nav;