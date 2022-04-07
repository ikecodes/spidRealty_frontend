import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import styled from 'styled-components';
import BgImage from '../assets/images/chairman.jpg';
import Image from '../shared/Image';
const SimilarPostCard = () => {
  return (
    <div className='bg-light my-3'>
      <Container className='row py-2'>
        <div className='col-lg-5'>
          <Image src={BgImage} h={5} unit='rem' alt='similar' />
        </div>
        <div className='col-lg-7 p-0 text-dark'>
          <h6 className='fw-bold'>
            How to Create a Productive Work-From-Home Office
          </h6>
          <div className='d-flex align-items-center'>
            <BsCalendarDate size={15} className='me-1' />
            <span className='mt-1'>22-20-2022</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  & span,
  h6 {
    font-size: 0.8rem;
  }
`;

export default SimilarPostCard;
