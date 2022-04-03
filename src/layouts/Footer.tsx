import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import colors from '../constants/colors';
import Logo from '../assets/images/logo-placeholder.png';

const Footer = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row gap-4 gap-md-0'>
          <div className='col-lg-3'>
            <ImageBox src={Logo} />
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize'>
              <li className='mb-3 fw-bolder'>quick links</li>
              <Link to='/about'>
                <li className='mb-3'>about us</li>
              </Link>
              <Link to='/contact-us'>
                <li className='my-3'>contact</li>
              </Link>
              <Link to='/invest'>
                <li className='my-3'>invest</li>
              </Link>
              <Link to='/advertise'>
                <li className='my-3'>advertise</li>
              </Link>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize'>
              <li className='mb-3 fw-bolder'>legal</li>
              <Link to='/about'>
                <li className='mb-3'>privacy policy</li>
              </Link>
              <Link to='/contact-us'>
                <li className='my-3'>terms of use</li>
              </Link>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h6 className='text-capitalize fw-bolder mb-3'>contact us</h6>
            <ul className='mb-4 d-flex justify-content-between'>
              <a href='/facebook' target='_blank'>
                <FaFacebook size={25} />
              </a>
              <a href='/facebook' target='_blank'>
                <FaInstagram size={25} />
              </a>
              <a href='/facebook' target='_blank'>
                <FaLinkedin size={25} />
              </a>
              <a href='/facebook' target='_blank'>
                <FaYoutube size={25} />
              </a>
            </ul>
            <p className='mb-3'>
              No. 10, Oke Crescent, Off Adeyemo Alakija Street, Victoria Island,
              Lagos
            </p>
            <Text className='text-capitalize mb-3'>+234 8800 2000 300</Text>
            <Text className='text-capitalize mb-3'>hello@spidrealty.com</Text>
          </div>
        </div>
        <div className='text-center my-3'>
          <p className='text-secondary'>
            © 2022 Spid realty. All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: ${colors.primary};
  padding: 5rem 0;
  background: ${colors.bgGradient};
  & a,
  a:link {
    color: ${colors.primary};
    text-decoration: none;
  }
  & a:hover,
  a:active {
    color: ${colors.tertiary};
  }
`;

const ImageBox = styled.img`
  width: 12rem;
  height: auto;
  background-size: cover;
`;
const Text = styled.h6`
  font-size: 0.9rem;
`;
export default Footer;
