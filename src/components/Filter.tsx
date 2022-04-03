import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
// import Button from '../shared/Button';
const Filter = () => {
  return (
    <FilterContainer>
      <div className='d-flex justify-content-center'>
        <select name='state' id='state' className='form-select'>
          <option value='lagos'>State</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select name='lga' id='lga' className='form-select'>
          <option value='lagos'>LGA</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select name='lga' id='lga' className='form-select'>
          <option value='lagos'>Type</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select name='lga' id='lga' className='form-select'>
          <option value='lagos'>Max</option>
          <option value='lagos'>Lagos</option>
        </select>
      </div>
      <div className='text-center mt-3'>
        <Button>search</Button>
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
  }
`;
const Button = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  color: ${colors.white};
  background: ${colors.tertiary};
  border-radius: 5rem;
  transform-origin: bottom;
  transition: all 0.3s linear;

  &:hover {
    background: ${colors.primary};
    transform: scale(1.05);
  }
`;
export default Filter;
