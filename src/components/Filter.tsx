import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';

interface Props {
  home?: boolean;
}
const Filter: React.FC<Props> = ({ home }) => {
  return (
    <FilterContainer home={home}>
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
        <Button title='search' loading={false} rounded />
      </div>
    </FilterContainer>
  );
};

const FilterContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.home ? 'transparent' : 'rgba(0, 0, 0, 0.4)'};
  padding: ${(props) => (props.home ? '0' : '2rem 0')};
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

export default Filter;
