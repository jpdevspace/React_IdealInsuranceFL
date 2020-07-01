import React, { useContext } from 'react';
import LanguageContext from "../../Context/LanguageContext";
import { CardCentered, CardText, Img01 } from "../Styled/Card";
import ThankYouSVG from "../../assets/successThankyou.svg";

const ThankYou = () => {
  const [ language  ] = useContext(LanguageContext);

  const text = {
    english: "Thank you! One of our agents will contact you about the best plan for you.",
    spanish: "Gracias! Uno de nuestros agentes se comunicará con usted para mostrarle el plan que más le conviene."
  };

  return (
    <CardCentered>
      <CardText>{text[language]}</CardText>
      <Img01 src={ThankYouSVG} alt="Success, form completed" />
    </CardCentered>
  );
}
 
export default ThankYou;