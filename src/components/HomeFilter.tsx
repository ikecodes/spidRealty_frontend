import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';

const HomeFilter = () => {
  return (
    <FilterContainer>
      <div className='d-flex justify-content-center'>
        <select name='state' id='state' className='form-select'>
          <option value='lagos'>State</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select name='lga' id='lga' className='form-select'>
          <option value='lagos'>City</option>
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
  }
`;

export default HomeFilter;
