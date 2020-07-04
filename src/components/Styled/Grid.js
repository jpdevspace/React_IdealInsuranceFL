import styled from "styled-components";

export const Grid = styled.div`
  width: 95%;
  height: 400px;
  margin: 3em auto;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  @media screen and (min-width: 650px) {
    max-width: 880px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.size ? props.size : "contain"};
  background-image: url(${props => props.bg});
  
  @media screen and (min-width: 650px) {
    background-size: contain;
  }
`;