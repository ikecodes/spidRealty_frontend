import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import { states, categories } from "../constants/selectors";
import colors from "../constants/colors";

const Filter = () => {
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
    <Container className='d-flex justify-content-center align-items-center'>
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
      <div className='text-center'>
        <Button title='search' loading={false} rounded />
      </div>
    </Container>
  );
};

const Container = styled.div`
  & select {
    &.active {
      background-color: ${colors.secondary};
    }
  }
`;
export default Filter;
