import React, { useState } from "react";
import QuestionContainer from "./components/QuestionContainer";
import AboutUs from "./components/AboutUs";
import Nav from "./components/Nav";
import CompaniesGrid from "./components/CompaniesGrid";
import LanguageContext from "./Context/LanguageContext";
import { GlobalStyle } from "./utils";

const App = () => {
  const languageHook = useState("english");

  return (
    <LanguageContext.Provider value={languageHook}>
      <Nav />
      <QuestionContainer />
      <CompaniesGrid />
      <AboutUs />
      <GlobalStyle />
    </LanguageContext.Provider>
  );
};

export default App;
