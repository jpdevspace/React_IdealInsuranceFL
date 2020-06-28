import React, { useContext, useEffect, useState } from "react";
import {
  CardCentered,
  CardText,
  DropdownMenu,
  TextInput,
  TextInputLabel,
  SmallText } from "../Card";
import SubmitButton      from "../SubmitButton";
import LanguageContext from "../../Context/LanguageContext";

const Question06 = ({ updateAnswer, currAnswer, submitForm }) => {
  const [ language  ] = useContext(LanguageContext);
  const [ answer, setAnswer ] = useState(currAnswer);
  const [ isValid, setIsValid ] = useState({
    name: false,
    dob: false,
    phone: false,
  });
  const [ showValidationMsg, setShowValidationMsg ] = useState({
    name: false,
    dob: false,
    phone: false,
  });

  useEffect(() => {
    updateAnswer(answer, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer])

  const question = {
    english: {
      title: "Contact Information",
      name: {
        label: "Name",
        validation: "Please provide a valid name"
      },
      dob: {
        label: "Date of Birth",
        validation: "Provide a valid date of birth"
      },
      gender: {
        label: "Gender",
        validation: "Select your gender"
      },
      phone: {
        label: "Phone Number",
        validation: "Please provide a falid phone number. e.g. 123-456-7890"
      }
    },
    spanish: {
      name: {
        label: "Nombre",
        validation: "Provea un nombre válido"
      },
      dob: {
        label: "Fecha de Nacimiento",
        validation: "Fecha de nacimiento inválida"
      },
      gender: {
        label: "Género",
        validation: "Seleccione un género"
      },
      phone: {
        label: "Número de Teléfono",
        validation: "Provea un número de teléfono valido. ejemplo: 123-456-7890"
      }
    }
  }

  const handleChange = e => {
    const { value, name } = e.target;

    setAnswer({
      ...answer,
      [name]: value
    });
  };

  const validationMsg = (field) => {
    let msg = null;

    if (showValidationMsg[field] && !isValid[field]) {
      msg = question[language][field].validation;
    }

    return msg;
  }

  const handleSubmitForm = () => {
    if (isValid.name && isValid.dob && isValid.phone) {
      submitForm();
    } else {
      setShowValidationMsg({
        name: true,
        dob: true,
        phone: true
      });
    }
  }

  const validateDOB = (dob) => new Date(dob) < new Date();

  const validatePhone = (phoneNumber) => {
    const formattedPhone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phoneNumber);
    const tenDigits = /[0-9]{10}/.test(phoneNumber);

    return formattedPhone || tenDigits;
  };

  const validateField = (field) => {
    switch(field) {
      case "name": 
        if (currAnswer.name.length > 1) {
          setIsValid({...isValid, name: true });
          setShowValidationMsg({ ...showValidationMsg, name: false });
        } else {
          setIsValid({...isValid, name: false });
          setShowValidationMsg({ ...showValidationMsg, name: true });
        }
        break;

      case "dob":
        if (validateDOB(currAnswer.dob)) {
          setIsValid({...isValid, dob: true });
          setShowValidationMsg({ ...showValidationMsg, dob: false });
        } else {
          setIsValid({...isValid, dob: false });
          setShowValidationMsg({ ...showValidationMsg, dob: true });
        }
        break;

      case "phone":
        if (validatePhone(currAnswer.phone)) {
          setIsValid({...isValid, phone: true });
          setShowValidationMsg({ ...showValidationMsg, phone: false });
        } else {
          setIsValid({...isValid, phone: false });
          setShowValidationMsg({ ...showValidationMsg, phone: true });    
        }
        break;
      
      default: return;
    }
  }

  const q = question[language];

  return (
    <CardCentered>
      <CardText>{q.title}</CardText>
      <TextInputLabel>
        { q.name.label }
        <TextInput
          onChange={e => handleChange(e)}
          onBlur={e => validateField(e.target.name)}
          value={ currAnswer ? currAnswer.name : "" }
          name="name"
          placeholder={q.name.label}
          required 
          type="text"
        />
        <small>{ validationMsg("name")  }</small>
      </TextInputLabel>
      <TextInputLabel>
        { q.phone.label }
        <TextInput
          onChange={e => handleChange(e)}
          onBlur={e => validateField(e.target.name)}
          value={ currAnswer ? currAnswer.phone : "" }
          name="phone"
          placeholder={`${q.phone.label} e.g. 123-456-7890`}
          required 
          type="tel"
        />
        <SmallText>Format: 123-456-7890</SmallText>
        <small>{ validationMsg("phone")  }</small>
      </TextInputLabel>
      <TextInputLabel>
        { q.dob.label }
        <TextInput
          onChange={e => handleChange(e)}
          onBlur={e => validateField(e.target.name)}
          value={ currAnswer ? currAnswer.dob : "" }
          name="dob"
          placeholder={q.dob.label}
          required 
          type="date"
        />
        <small>{ validationMsg("dob")  }</small>
      </TextInputLabel>
      <TextInputLabel>
        { q.gender.label }
        <DropdownMenu
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
        </DropdownMenu>
        <small>{ validationMsg("gender")  }</small>
      </TextInputLabel>
      <SubmitButton submitForm={handleSubmitForm}/>
    </CardCentered>
  );
};

export default Question06;
