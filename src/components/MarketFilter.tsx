import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Filter from "./Filter";

const MarketFilter = () => {
  return (
    <FilterContainer className='mb-3 shadow'>
      <Filter />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  width: 100%;
  /* background-color: ${colors.white}; */
`;
export default MarketFilter;
