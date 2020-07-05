import styled from "styled-components";
import { blue, typeScale, yellow } from "../../utils";

export const ContactUsSection = styled.section`
  width: 100%;
  margin: 0 auto;
  background-color: ${yellow[200]};
  color: ${blue[300]};
  padding: 2em;
  @media screen and (min-width: 900px) {
    width: 900px;
  }
`;

export const ContactUsTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 220px;
  font-size: ${typeScale.header1};
  padding-left: 2em;
  font-weight: bold;
`;

export const ContactUsBody = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ContactUsText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${typeScale.header3};
  width: 90%;
	display: flex;
	justify-content: space-between;
	flex-flow: column nowrap;
	align-items: center;
	height: 3em;
  margin: 0 auto 2em auto;
  width: 50%;
  min-width: 335px
`;

export const ContactUsLinks = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: ${typeScale.header4};
  text-decoration: none;
  color: ${blue[300]};
  margin-left: 1em;
`;