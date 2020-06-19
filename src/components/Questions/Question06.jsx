import React, { useContext } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Question06 = ({ updateAnswer, currAnswer }) => {
  const [language] = useContext(LanguageContext);

  const questions = {
    english: {
      title: "Contact Information",
      name: "Name",
      dob: "Date of Birth",
      month: "Month",
      day: "Day",
      year: "Year",
      gender: "Gender",
      phone: "Phone Number"
    },
    spanish: {
      title: "Información de Contacto",
      name: "Nombre",
      dob: "Fecha de Nacimiento",
      month: "Mes",
      day: "Día",
      year: "Año",
      gender: "Genero",
      phone: "Número de Teléfono"
    }
  }

  const handleChange = (e) => {
    const val = e.target.value;

    updateAnswer(val, val.length > 0);
  };

  const q = questions[language];
  console.log("Q >", q)
  return (
    <>
      <h3>{q.title}</h3>
      <label>
        { q.name }
        <input
          onChange={e => handleChange(e)}
          value={ currAnswer ? currAnswer.name : "" }
          placeholder={q.name}
          required 
          type="text"
        />
      </label>
    </>
  );
};

export default Question06;
