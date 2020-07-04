import styled from "styled-components";
import { blue, typeScale, yellow } from "../../utils";

export const AboutUsSection = styled.section`
  width: 100%;
  margin: 0 auto 5em auto;
  @media screen and (min-width: 900px) {
    width: 900px;
  }
`;

export const AboutUsTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 220px;
  background-color: ${blue[300]};
  color: ${yellow[200]};
  font-size: ${typeScale.header1};
  padding-left: 2em;
  font-weight: bold;
`;

export const AboutUsBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 2em auto 0 auto;
  justify-content: space-around;
  align-items: center;
`;

export const AboutUsText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${typeScale.header3};
  width: 90%;
  
  @media screen and (min-width: 900px) {
    width: 35%;
  }
`;

export const AboutUsPic = styled.img`
  width: 100%;

  @media screen and (min-width: 650px) {
    width: 500px;
    border-radius: 5px;
  }
`;