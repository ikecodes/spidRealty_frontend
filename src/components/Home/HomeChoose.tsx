import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import { MdOutlineContactPhone } from 'react-icons/md';
import { BsFillLockFill, BsFillBarChartLineFill } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';

const HomeChoose = () => {
  return (
    <Container>
      <h1 className='text-capitalize fw-bold my-3 align-items-center text-center pb-5 '>
        why choose us?
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 text-center'>
            <MdOutlineContactPhone size={80} className='my-3' />
            <h6 className='text-capitalize'>help center</h6>
          </div>
          <div className='col-lg-3 text-center'>
            <BiDollarCircle size={80} className='my-3' />
            <h6 className='text-capitalize'>property assurance</h6>
          </div>
          <div className='col-lg-3 text-center'>
            <BsFillBarChartLineFill size={80} className='my-3' />
            <h6 className='text-capitalize'>future investment</h6>
          </div>
          <div className='col-lg-3 text-center'>
            <BsFillLockFill size={80} className='my-3' />
            <h6 className='text-capitalize'>secure payment</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  color: ${colors.primary};
  background: ${colors.bgGradient};
`;
export default HomeChoose;
