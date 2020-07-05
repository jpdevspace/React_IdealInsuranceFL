import React, { useContext } from 'react';
import LanguageContext from "../Context/LanguageContext";
import {
  ContactUsBody,
  ContactUsSection,
  ContactUsTitle,
  ContactUsText,
  ContactUsLinks } from "./Styled/ContactUs";

const ContactUs = () => {
  const [ language ] = useContext(LanguageContext);
  
  const text = {
    english: {
      title: "Contact Us.",
    },
    spanish: {
      title: "Contáctanos.",
    }
  }

  return (
    <ContactUsSection>
      <ContactUsTitle><h1>{text[language].title}</h1></ContactUsTitle>
      <ContactUsBody>
        <ContactUsText>
          <i className="fas fa-mobile-alt"></i>
          <ContactUsLinks href="tel:+14075889296">+1 (407) 588-9296</ContactUsLinks>
        </ContactUsText>
        <ContactUsText>
          <i className="fas fa-envelope-open-text"></i>
          <ContactUsLinks href="mailto:info@idealfinancialservices.org">info@idealfinancialservices.org</ContactUsLinks>
        </ContactUsText>
      </ContactUsBody>
    </ContactUsSection>
  );
}
 
export default ContactUs;
