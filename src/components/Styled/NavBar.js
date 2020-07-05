import styled from "styled-components";
import { typeScale, blue } from "../../utils";

export const NavBar = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 900px;
  margin: 0 auto 1em auto;

  @media screen and (min-width: 650px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const IdealTitle = styled.h1`
  font-size: ${typeScale.header1};
  color: ${blue[200]}
`;

export const LanguageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const PhoneNumText = styled.a`
  font-size: ${typeScale.header3};
  text-align: center;
  text-decoration: none;
  color: ${blue[300]};
  min-width: 395px;
  margin-bottom: 20px;
`;


export const Logo = styled.img`
  width: 300px;
`;
