import React from 'react';
import colors from '../constants/colors';
import { MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import BgImage from '../assets/images/event.jpg';
import Button from '../shared/Button';
import Image from '../shared/Image';

const PropertyCard = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer className='shadow'>
        <Card className='bg-transparent border-0'>
          <Image src={BgImage} h={10} unit='rem' alt='property' />
          <Card.Body>
            <Card.Title className='text-capitalize fs-6 m-0 p-0'>
              5 bed duplex apartment
            </Card.Title>
            <Price className='my-2'>₦30,000,000</Price>
            <Location className='p-0 text-secondary d-flex justify-content-end align-items-center'>
              <MdLocationPin size={15} />
              <span className='text-capitalize'>ikeja, lagos</span>
            </Location>
            <div className='text-center mt-3'>
              <Button title='view' loading={false} primary />
            </div>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  overflow: hidden;
  background-color: ${colors.grey};
`;

const Price = styled.h6`
  padding: 0;
  margin: 0;
  color: ${colors.tertiary};
`;
const Location = styled.h5`
  & span {
    font-size: 0.8rem;
  }
`;
export default PropertyCard;
