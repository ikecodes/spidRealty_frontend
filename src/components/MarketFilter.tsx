import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface DataProps {
  state: string;
  city: string;
  type: string;
  max: string;
}
const MarketFilter = () => {
  const [data, setData] = useState<DataProps>({
    state: '',
    city: '',
    type: '',
    max: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <FilterContainer className='mb-3 shadow'>
      <div className='d-flex justify-content-between gap-2'>
        <select
          name='state'
          id='state'
          className={`form-control ${data.state ? 'active' : ''}`}
          onChange={(e) => handleChange(e)}
        >
          <option value='lagos'>State</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select
          name='city'
          id='lga'
          className={`form-control ${data.city ? 'active' : ''}`}
          onChange={(e) => handleChange(e)}
        >
          <option value='lagos'>City</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select
          name='type'
          id='lga'
          className={`form-control ${data.type ? 'active' : ''}`}
          onChange={(e) => handleChange(e)}
        >
          <option value='lagos'>Type</option>
          <option value='lagos'>Lagos</option>
        </select>
        <select
          name='max'
          id='lga'
          className={`form-control ${data.max ? 'active' : ''}`}
          onChange={(e) => handleChange(e)}
        >
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
    &.active {
      background-color: ${colors.secondary};
    }
  }
`;
export default MarketFilter;
