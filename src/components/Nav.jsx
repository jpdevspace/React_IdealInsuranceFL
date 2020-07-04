import React, { useContext } from "react";
import LanguageContext from "../Context/LanguageContext";
import { NavBar, LanguageContainer, Logo, PhoneNumText } from "./Styled/NavBar";
import { ButtonLanguage } from "./Styled/Button";
import BlueLogo from "../assets/IdealInsuranceLogo-03.png";

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
    <NavBar>
      <Logo src={BlueLogo} alt="Ideal Financial Services Logo" />
      <LanguageContainer>
        <PhoneNumText>{text[language]}: +1 (407) 588-9296</PhoneNumText>
        <ButtonLanguage onClick={changeLanguage}>{button[language]}</ButtonLanguage>
      </LanguageContainer>
    </NavBar>
  );
};

export default Nav;