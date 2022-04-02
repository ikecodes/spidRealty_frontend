import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import NavLg from '../layouts/NavLg';
import NavSm from '../layouts/NavSm';
import Filter from './Filter';
const Slider = () => {
  return (
    <div className='position-relative'>
      <NavSm />
      <NavLg />
      <Filter />
      <Carousel fade>
        <Carousel.Item className='position-relative' interval={1500}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/123/1200/600'
              alt='First slide'
            />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1>find your dream home</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
        <Carousel.Item interval={750}>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/456/1200/600'
              alt='Second slide'
            />
          </div>

          <Caption>
            <Carousel.Caption>
              <h1>join investment plan</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider_image_box'>
            <div className='slider_overlay'></div>
            <img
              className='slider_image'
              src='https://picsum.photos/id/678/1200/600'
              alt='Third slide'
            />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1>scale solutions</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const Caption = styled.div`
  & h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export default Slider;
