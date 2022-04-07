import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';
import Button from '../../shared/Button';

const HomeSubscription = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
  };
  return (
    <Container>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 text-center'>
            <h1 className='text-capitalize'>stay connected</h1>
            <p>
              Get real-time updates on all our financial offerings and news by
              signing up here
            </p>
          </div>
          <div className='col-lg-6 d-flex'>
            <input
              type='text'
              name='email'
              placeholder='Enter Email Address'
              className='form-control rounded-0'
            />
            <Button
              title='subscribe'
              inverse
              loading={loading}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: ${colors.white};
  padding: 2.5rem 0;
  background-color: ${colors.tertiary};
`;

export default HomeSubscription;
