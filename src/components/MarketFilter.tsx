import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const MarketFilter = () => {
  return (
    <FilterContainer className='mb-3 shadow'>
      <div className='d-flex justify-content-between gap-2'>
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
  /* @media (max-width: 576px) {
    width: 100%;
  } */
  & select {
    border-radius: 2;
    background-color: ${colors.grey};
  }
`;
export default MarketFilter;
