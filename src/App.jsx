import React, { useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import LanguageContext from "./Context/LanguageContext";

import "./App.css";

const App = () => {
  const languageHook = useState("english");

  return (
    <LanguageContext.Provider value={languageHook}>
      <Nav />
      <Card />
    </LanguageContext.Provider>
  );
};

export default App;
