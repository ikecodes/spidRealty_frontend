import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import styled from 'styled-components';
import BgImage from '../assets/images/chairman.jpg';
const SimilarPostCard = () => {
  return (
    <div className='bg-light my-3'>
      <Container className='row py-2'>
        <div className='col-lg-5 '>
          <Image src={BgImage} alt='similar' />
        </div>
        <div className='col-lg-7 text-dark'>
          <h6 className='fw-bold mt-2'>
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
const Image = styled.img`
  height: 5rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 576px) {
    width: 40%;
  }
`;
export default SimilarPostCard;
