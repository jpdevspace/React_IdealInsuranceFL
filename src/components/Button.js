import styled from "styled-components";
import { blue, green, grey, neutral, typeScale } from "../utils";

const Button = styled.button`
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  transition: all 0.15s ease;
  cursor: pointer;
  font-size: ${typeScale.paragraph};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
  }
`;

export const ButtonLgBlue = styled(Button)`
  background-color: ${blue[200]};
  color: ${neutral[100]};
  padding: 12px 32px;
  font-size: ${typeScale.header3};
  grid-area: button;
  margin-bottom: 1.5em;

  &:hover {
    background-color: ${blue[100]};
  }

  &:active {
    background-color: ${blue[300]};
  }
`;

export const ButtonSmGrey = styled(Button)`
  background-color: ${grey[200]};
  color: #FFF;
  padding: 4px 24px;
  font-size: ${typeScale.header4};

  &:hover {
    background-color: ${grey[100]};
  }

  &:active {
    background-color: ${grey[300]};
  }
`;

export const ButtonSubmit = styled(ButtonLgBlue)`
  background-color: ${green[200]};
  
  &:hover {
    background-color: ${green[100]};
  }

  &:active {
    background-color: ${green[300]};
  }
`;