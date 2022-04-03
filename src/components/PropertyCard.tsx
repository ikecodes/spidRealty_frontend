import React from 'react';
import colors from '../constants/colors';
import { MdLocationPin } from 'react-icons/md';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import BgImage from '../assets/images/event.jpg';
import Button from '../shared/Button';

const PropertyCard = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer className='shadow'>
        <Card className='bg-transparent border-0'>
          <CardImage alt='event' src={BgImage} />
          <Card.Body>
            <Card.Title className='text-capitalize fs-4 m-0 p-0'>
              kings villa
            </Card.Title>
            <Location className='p-0 text-secondary'>
              <MdLocationPin size={15} />
              <span className='text-capitalize'>ikeja, lagos</span>
            </Location>
            <Price className='my-2'>₦30,000,000</Price>
            <div className='text-end my-3'>
              <Button title='view' loading={false} primary rounded />
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
const CardImage = styled.img`
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;
const Price = styled.h5`
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
