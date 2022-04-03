import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Section from '../../layouts/Section';
import PropertyCard from '../PropertyCard';

const HomeFeatured = () => {
  return (
    <Section>
      <div className='container'>
        <h1 className='text-capitalize fw-bold my-5 align-items-center'>
          featured properties
        </h1>
        <div className='row'>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <div className='text-center my-3'>
          <Button>explore all</Button>
        </div>
      </div>
    </Section>
  );
};

const Button = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  background: ${colors.white};
  border-radius: 5rem;

  transform-origin: bottom;
  transition: all 0.3s linear;

  &:hover {
    color: ${colors.tertiary};
    border: 1px solid ${colors.tertiary};
  }
`;

export default HomeFeatured;
