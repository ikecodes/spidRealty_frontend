import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';

const InvestSummary = () => {
  return (
    <div className='my-5 shadow py-5 px-2 text-dark'>
      <h3 className='text-capitalize  m-0 p-0 mb-5 text-center'>
        Over ₦10 million invested
      </h3>
      <div className='row justify-content-around text-capitalize text-center'>
        <Box className='col-lg-3 mb-5'>
          <Container>
            <h5>total investors</h5>
            <span className='fw-bold'>600+</span>
          </Container>
        </Box>
        <Box className='col-lg-3 mb-5'>
          <Container>
            <h5>Average annualized return in 2021</h5>
            <span className='fw-bold'>20%</span>
          </Container>
        </Box>
        <Box className='col-lg-3 mb-5'>
          <Container>
            <h5>Properties in-progress</h5>
            <span className='fw-bold'>13</span>
          </Container>
        </Box>
        <Box className='col-lg-3 mb-5'>
          <Container>
            <h5>Properties completed</h5>
            <span className='fw-bold'>600+</span>
          </Container>
        </Box>
      </div>
      <p className='m-0 text-secondary text-center'>
        last updated 22nd January 2022
      </p>
    </div>
  );
};
const Box = styled.div`
  &:not(:last-child) {
    border-right: 3px solid ${colors.grey};
  }
`;
const Container = styled.div`
  & h5 {
    color: ${colors.primary};
  }
`;
export default InvestSummary;
