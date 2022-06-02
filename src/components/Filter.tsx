import React, { useEffect, useState } from "react";
import styled from "styled-components";
import slugify from "slugify";
import Button from "../shared/Button";
import { states, categories } from "../constants/selectors";
import colors from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../slices/propertySlice";
import { setFilter } from "../slices/paramSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { ParamState } from "../constants/interfaces";

const Filter = () => {
  const { page, limit } = useSelector((state: ParamState) => state.param);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [regions, setRegions] = useState<any>([]);
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");

  let sSlug = "";
  let rSlug = "";
  let cSlug = "";

  useEffect(() => {
    setRegions([]);
    const arr = states.find((location) => location.state.name === state);
    if (arr) setRegions(arr?.state.locals);
  }, [state]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (state) sSlug = slugify(state, { lower: true });
    if (region) rSlug = slugify(region, { lower: true });
    if (category) cSlug = slugify(category, { lower: true });
    dispatch(
      getAllProperty({
        stateSlug: sSlug,
        regionSlug: rSlug,
        categorySlug: cSlug,
        page,
        limit,
      })
    );
    dispatch(
      setFilter({
        stateSlug: sSlug,
        regionSlug: rSlug,
        categorySlug: cSlug,
      })
    );
    if (location.pathname === "/") return navigate("/marketplace");
  };
  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <select
        name='state'
        id='state'
        value={state}
        onChange={(e) => {
          if (e.target.value === "") {
            setState(e.target.value);
            setRegion("");
            return;
          }
          setState(e.target.value);
        }}
        className={`form-control ${state ? "active" : ""}`}
      >
        <option value=''>State</option>
        {states?.map((location) => (
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
        {regions?.map((region: { name: string; id: number }) => (
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
        <Button
          title='search'
          loading={false}
          handleClick={(e) => handleSubmit(e)}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  & select {
    border-radius: 0;
    &.active {
      background-color: ${colors.secondary};
    }
  }
`;
export default Filter;
