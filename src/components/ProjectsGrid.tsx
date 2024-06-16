import React from "react";
import styled from "styled-components";
import GridItem from "./GridItem";
import data from "../helpers/data";

const StyledGrid = styled.div`
  display: grid;
  place-items: start;
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
      {data.map((item: any) => (
        <GridItem
          key={item.id}
          name={item.name}
          description={item.description}
          reference={item.reference}
        />
      ))}
    </StyledGrid>
  );
}

export default ProjectsGrid;
