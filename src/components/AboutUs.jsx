import React, { useContext } from 'react';
import LanguageContext from "../Context/LanguageContext";
import { AboutUsBody, AboutUsPic, AboutUsSection, AboutUsTitle, AboutUsText } from "./Styled/AboutUs";
import FamilyPic from "../assets/family2.png";

const AboutUs = () => {
  const [ language ] = useContext(LanguageContext);
  
  const text = {
    english: {
      title: "About Us.",
      body: "For more than two years, we've been helping people like you and their families get the best health plan. Each person has different needs, we're here to guide you through the process and to assist you in choosing the right health plan that fits your needs."
    },
    spanish: {
      title: "Sobre Nosotros.",
      body: "Llevamos más de dos años ayudando a personas como tu y a sus familias a que obtengan el mejor plan de salud. Cada uno tiene necesidades diferentes, nosotros estamos aquí para guiarte en el proceso y asistirte para escoger el plan de salud correcto que se ajuste a ti.",
    }
  }

  return (
    <AboutUsSection>
      <AboutUsTitle><h1>{text[language].title}</h1></AboutUsTitle>
      <AboutUsBody>
        <AboutUsText>{text[language].body}</AboutUsText>
        <AboutUsPic src={FamilyPic} alt="Family together outside of house" />
      </AboutUsBody>
    </AboutUsSection>
  );
}
 
export default AboutUs;
