import styled from "styled-components";
import {
  green,
  grey,
  neutral,
  typeScale
} from "../utils";

export const Card = styled.div`
  box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
  background-color: ${neutral[100]};
  width: 90%;
  max-width: 650px;
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
	justify-content: space-between;
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

export const CardText = styled.h1`
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

export const TextInputLabel = styled.label`
  grid-area: input;
	display: flex;
  flex-flow: column;
  align-items: center;
`;

export const TextInput = styled.input`
  font-size: ${typeScale.header4};
  text-align: center;
  padding: 0.5em 1.5em;
  border-radius: 50px;
  border: 3px solid ${grey[100]};
  min-width: 290px;
`;

export const ProgressStatus = styled.div`
  font-size: ${typeScale.header3};
  background-color: ${props => props.isLast ? green[100] : grey[100]};
  padding: 10px;
  border-radius: 50%;
`;

export const CardCentered = styled.div`
  display: flex;
  flex-flow: column nowrap;
	justify-content: space-between;
  align-items: center;
  height: 500px;
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 230px;
  justify-content: space-evenly;
`;

export const CheckboxInput = styled.input`
  margin-right: 7px;
`;

export const DropdownMenu = styled.select`
	min-width: 290px;
	padding: 0.7em 1.5em;
	border: 3px solid #e5e3e3;
	border-radius: 50px;
	display: block;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat;
	background-position: right .7em top 50%;
	background-size: 1em auto;
`;

export const SmallText = styled.small`
  font-size: ${typeScale.helperText};
  color: ${grey[300]};
  margin-top: 5px;
`;