import React, { useState } from "react";
import QuestionContainer from "./components/QuestionContainer";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import CompaniesGrid from "./components/CompaniesGrid";
import LanguageContext from "./Context/LanguageContext";
import { GlobalStyle } from "./utils";
import ContactUs from "./components/ContactUs";

const App = () => {
  const languageHook = useState("spanish");

  return (
    <LanguageContext.Provider value={languageHook}>
      <Nav />
      <QuestionContainer />
      <CompaniesGrid />
      <AboutUs />
      <ContactUs />
      <GlobalStyle />
    </LanguageContext.Provider>
  );
};

export default App;
