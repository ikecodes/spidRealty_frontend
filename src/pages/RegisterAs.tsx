import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../constants/colors';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import Button from '../shared/Button';
import UserImg from '../assets/images/user.jpg';
import AgentImg from '../assets/images/agent.jpg';
import InvestotImg from '../assets/images/investor.jpg';
import Image from '../shared/Image';

const RegisterAs = () => {
  return (
    <Layout>
      <Section>
        <div className='row'>
          <h1 className='text-capitalize m-0 p-0 mb-5 text-center'>
            I am signing up as…
          </h1>
          <div className='col-lg-4 col-md-6 mb-5'>
            <CardContainer>
              <Image src={AgentImg} h={15} unit='rem' alt='agent' />
              <h5 className='text-uppercase m-0 my-3 text-dark'>agent</h5>
              <div className='text-center mb-3'>
                <Link to='/signUp'>
                  <Button title='get started' rounded primary />
                </Link>
              </div>
            </CardContainer>
          </div>
          <div className='col-lg-4 col-md-6 mb-5'>
            <CardContainer>
              <Image src={InvestotImg} h={15} unit='rem' alt='agent' />
              <h5 className='text-uppercase m-0 my-3 text-dark'>investor</h5>
              <div className='text-center mb-3'>
                <Link to='/signUp'>
                  <Button title='get started' rounded primary />
                </Link>
              </div>
            </CardContainer>
          </div>
          <div className='col-lg-4 col-md-6 mb-5'>
            <CardContainer>
              <Image src={UserImg} h={15} unit='rem' alt='agent' />
              <h5 className='text-uppercase m-0 my-3 text-dark'>user</h5>
              <div className='text-center mb-3'>
                <Link to='/signUp'>
                  <Button title='get started' rounded primary />
                </Link>
              </div>
            </CardContainer>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 15px;
  background-color: ${colors.white};
  border: 2px solid ${colors.secondary};
  text-align: center;
`;
export default RegisterAs;
