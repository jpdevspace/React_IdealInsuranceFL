import styled from "styled-components";
import { typeScale, blue, neutral } from "../../utils";

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

export const PhoneNumText = styled.h3`
  font-size: ${typeScale.header3};
  color: ${neutral[500]};
`;

export const Logo = styled.img`
  width: 300px;
`;
