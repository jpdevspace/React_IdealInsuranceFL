import React, { useState } from "react";
import QuestionContainer from "./components/QuestionContainer";
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
      <GlobalStyle />
    </LanguageContext.Provider>
  );
};

export default App;
