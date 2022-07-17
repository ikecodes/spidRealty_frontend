import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import colors from "../constants/colors";
import Logo from "../assets/images/logos/spid-logo.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row gap-4 gap-md-0'>
          <div className='col-lg-3'>
            <ImageBox src={Logo} />
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize m-0 p-0'>
              <li className='mb-3 fw-bolder'>quick links</li>
              <li className='mb-3'>
                <Link to='/about-us'>about us</Link>
              </li>
              <li className='my-3'>
                <a href='mailto:support@spidrealty.com'>contact us</a>
              </li>
              <li className='my-3'>
                <Link to='/blog'>blog</Link>
              </li>
              {/* <Link to='/advertise'>
                <li className='my-3'>advertise</li>
              </Link> */}
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='text-capitalize m-0 p-0'>
              <li className='mb-3 fw-bolder'>legal</li>
              <li className='mb-3'>
                <Link to='/about'>privacy policy</Link>
              </li>
              <li className='my-3'>
                <Link to='/contact-us'>terms of use</Link>
              </li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h6 className='text-capitalize fw-bolder mb-3'>contact us</h6>
            <ul className='my-4 d-flex justify-content-between m-0 p-0'>
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
            <p className='mb-3'>16 Banjul Street, Wuse 2, Abuja</p>
            <Text className='text-capitalize mb-3'>
              +2348163736036{","} +2348165101689
            </Text>
            <Text className='mb-3'>
              <a href='mailto:hello@spidrealty.com'>hello@spidrealty.com</a>{" "}
            </Text>
          </div>
        </div>
        <div className='text-center my-3'>
          <p className='text-secondary'>
            © 2022 Spid realty. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop smooth color={colors.primary} />
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
  width: 17rem;
  height: auto;
  background-size: cover;
`;
const Text = styled.h6`
  font-size: 0.9rem;
`;
export default Footer;
