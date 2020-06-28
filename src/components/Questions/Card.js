import styled from "styled-components";
import { blue, neutral, typeScale } from "../../utils";

export const Card = styled.div`
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  background-color: ${neutral[100]};
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
`;

export const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1.5em 0 0 0;
`;

export const Card01 = styled.div`
  display: flex;
  flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
  height: 500px;
}
  @media screen and (min-width: 600px) {
    display: grid;
    height: 60vh;
  
    grid-template-areas:
      'title  image'
      'input input'
      'button button';
    
    grid-template-rows: 50% 25% 25%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    align-items: center;
  }
`;

export const Text01 = styled.h1`
  grid-area: title;
  text-align: center;
  max-width: 65%;
  font-size: ${typeScale.header1}
`;

export const Img01 = styled.img`
  height: 150px;
  grid-area: image;
  @media screen and (min-width: 600px) {
    width: 80%;
    height:90%;
  }
`;

export const ZipCodeLabel = styled.label`
  grid-area: input;
	display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ZipCodeInput = styled.input`
  font-size: 1.25rem;
  padding: 0.5em 1.5em;
  border-radius: 50px;
  border: 3px solid ${blue[200]}
`;