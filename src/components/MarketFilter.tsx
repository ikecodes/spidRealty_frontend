import React, { useEffect, useState } from "react";
import { states, categories } from "../constants/selectors";
import styled from "styled-components";
import colors from "../constants/colors";

const MarketFilter = () => {
  const [regions, setRegions] = useState<any>([]);
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setRegions([]);
    const arr = states.find((location) => location.state.name === state);
    if (arr) setRegions(arr?.state.locals);
  }, [state]);

  return (
    <FilterContainer className='mb-3 shadow'>
      <div className='d-flex justify-content-between gap-2'>
        <select
          name='state'
          id='state'
          className={`form-control ${state ? "active" : ""}`}
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value=''>State</option>
          {states.map((location) => (
            <option value={location.state.name} key={location.state.id}>
              {location.state.name}
            </option>
          ))}
        </select>
        <select
          name='city'
          id='lga'
          className={`form-control ${region ? "active" : ""}`}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value=''>Region</option>
          {regions.map((region: { name: string; id: number }) => (
            <option value={region.name} key={region.id}>
              {region.name}
            </option>
          ))}
        </select>
        <select
          name='max'
          id='lga'
          className={`form-control ${category ? "active" : ""}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=''>Category</option>
          {categories.map((category) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
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
  background-color: ${colors.white};
  & select {
    border-radius: 2;
    background-color: ${colors.grey};
    &.active {
      background-color: ${colors.secondary};
    }
  }
`;
export default MarketFilter;
