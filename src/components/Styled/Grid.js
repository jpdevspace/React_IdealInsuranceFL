import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 350px;
  margin: 3em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

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
  background-size: contain;
  background-image: url(${props => props.bg})
  `;