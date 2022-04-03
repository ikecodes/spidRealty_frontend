import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Section from '../../layouts/Section';
import ArticleCard from '../ArticleCard';
const HomeArticles = () => {
  return (
    <Section>
      <h1 className='text-capitalize fw-bold my-5 align-items-center'>
        recent article & updates
      </h1>
      <div className='row'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <div className='text-center my-3'>
        <Button>explore all</Button>
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
export default HomeArticles;
