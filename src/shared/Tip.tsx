import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Tip: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Container className='p-2'>
      <h6 className='text-capitalize text-dark'>{title}</h6>
      <p className='m-0'>{description}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.secondary};
`;
export default Tip;
