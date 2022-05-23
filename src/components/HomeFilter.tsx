import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import { states, categories } from "../constants/selectors";
import colors from "../constants/colors";

const HomeFilter = () => {
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
    <FilterContainer>
      <div className='d-flex justify-content-center'>
        <select
          name='state'
          id='state'
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={`form-control ${state ? "active" : ""}`}
        >
          <option value=''>State</option>
          {states.map((location) => (
            <option value={location.state.name} key={location.state.id}>
              {location.state.name}
            </option>
          ))}
        </select>
        <select
          name='region'
          id='region'
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={`form-control ${region ? "active" : ""}`}
        >
          <option value=''>Region</option>
          {regions.map((region: { name: string; id: number }) => (
            <option value={region.name} key={region.id}>
              {region.name}
            </option>
          ))}
        </select>
        <select
          name='category'
          id='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`form-control ${category ? "active" : ""}`}
        >
          <option value=''>Category</option>
          {categories.map((category) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className='text-center mt-3'>
        <Button title='search' loading={false} rounded />
      </div>
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
  & select {
    border-radius: 0;
    &.active {
      background-color: ${colors.secondary};
    }
  }
`;

export default HomeFilter;
