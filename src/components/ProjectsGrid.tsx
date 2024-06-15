import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";

const StyledGrid = styled.div`
  display: grid;
  place-items: center;
  padding: 40px 0px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 100px;
  row-gap: 20px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 50px;
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: 1fr;
    column-gap: 30px;
  }
`;

function ProjectsGrid() {
  return (
    <StyledGrid>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
      <GridItem title={"Projeto 1"}></GridItem>
    </StyledGrid>
  );
}

export default ProjectsGrid;
