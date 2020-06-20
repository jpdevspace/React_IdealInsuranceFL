import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../../Context/LanguageContext";

const Question06 = ({ updateAnswer, currAnswer }) => {
  const [language] = useContext(LanguageContext);
  const [selected, setSelected] = useState(currAnswer);
  
  useEffect(() => {
    updateAnswer(selected, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const questions = {
    english: {
      title: "Contact Information",
      name: "Name",
      dob: "Date of Birth",
      gender: "Gender",
      phone: "Phone Number"
    },
    spanish: {
      title: "Información de Contacto",
      name: "Nombre",
      year: "Año",
      gender: "Genero",
      phone: "Número de Teléfono"
    }
  }

  const handleChange = e => {
    const { value, name } = e.target;

    setSelected({
      ...selected,
      [name]: value
    });
  };

  const q = questions[language];

  return (
    <>
      <h3>{q.title}</h3>
      <label>
        { q.name }
        <input
          onChange={e => handleChange(e)}
          value={ currAnswer ? currAnswer.name : "" }
          name="name"
          placeholder={q.name}
          required 
          type="text"
        />
      </label>
      <label>
        { q.phone }
        <input
          onChange={e => handleChange(e)}
          value={ currAnswer ? currAnswer.phone : "" }
          name="phone"
          placeholder={`${q.phone} e.g. 123-456-7890`}
          required 
          type="tel"
        />
      <small>Format: 123-456-7890</small>
      </label>
      <label>
        { q.dob }
        <input
          onChange={e => handleChange(e)}
          value={ currAnswer ? currAnswer.dob : "" }
          name="dob"
          placeholder={q.dob}
          required 
          type="date"
        />
      </label>
      <label>
        { q.gender }
        <select
          name="gender"
          value={currAnswer ? currAnswer.gender : "female"}
          onChange={e => handleChange(e)}>
          <option 
            value="female">
              {language === "english" ? "Female" : "Femenino"}
          </option>
          <option
            name="gender"
            value="male">
              {language === "english" ? "Male" : "Masculino"}
          </option>
        </select>
      </label>
    </>
  );
};

export default Question06;
