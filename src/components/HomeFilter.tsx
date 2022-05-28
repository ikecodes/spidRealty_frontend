import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const HomeFilter = () => {
  return (
    <FilterContainer>
      <Filter />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  width: 70%;
  position: absolute;
  z-index: 150;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export default HomeFilter;
