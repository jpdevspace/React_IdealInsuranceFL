import React, { useContext } from 'react';
import LanguageContext from "../Context/LanguageContext";
import { ContactUsSection, ContactUsTitle, ContactUsText } from "./Styled/ContactUs";

const ContactUs = () => {
  const [ language ] = useContext(LanguageContext);
  
  const text = {
    english: {
      title: "Contact Us.",
    },
    spanish: {
      title: "Contáctanos.",
    },
    info: {
      phone: "+1 (407) 588-9296",
      email: "info@idealfinancialservices.org"
    }
  }

  return (
    <ContactUsSection>
      <ContactUsTitle><h1>{text[language].title}</h1></ContactUsTitle>
      <ContactUsText>Phone: +1 (407) 588-9296</ContactUsText>
      <ContactUsText>Email: info@idealfinancialservices.org</ContactUsText>
    </ContactUsSection>
  );
}
 
export default ContactUs;
