import React from 'react';
import InvestmentImage from '../assets/images/family.jpg';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from '../shared/Button';
import Image from '../shared/Image';
import { Link } from 'react-router-dom';

const InvestmentCard = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer className='shadow rounded'>
        <Image src={InvestmentImage} h={15} unit='rem' alt='property' />
        <TextContainer>
          <h5 className='text-capitalize text-center m-0 mb-3'>
            saint markson estate
          </h5>
          <div className='text-center bg-light'>
            <p className='m-0 text-dark text-uppercase text-center border-bottom'>
              investment net return
            </p>
            <div className='d-flex justify-content-around'>
              <Container className='text-primary text-uppercase'>
                <div>time frame</div>
                <div>5.3 mos</div>
              </Container>
              <Container className='text-uppercase'>
                <div>ROI</div>
                <div>40%</div>
              </Container>
              <Container className='text-success text-uppercase'>
                <div>Annualized ROI</div>
                <div>40%</div>
              </Container>
            </div>
          </div>
          <div className='text-center my-2'>
            <Link to='/investment/top-house'>
              <Button title='view' loading={false} primary />
            </Link>
          </div>
        </TextContainer>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  overflow: hidden;
  background-color: ${colors.grey};
`;
const TextContainer = styled.div`
  padding: 0.5rem 0;
  font-size: 0.8rem;
  & p {
    font-size: 0.8rem;
  }
`;

const Container = styled.div``;
export default InvestmentCard;
