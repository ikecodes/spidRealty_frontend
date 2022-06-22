import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import NavLg from "../layouts/NavLg";
import NavSm from "../layouts/NavSm";
import Filter from "./Filter";
const Slider = () => {
  return (
    <div className='position-relative'>
      <NavSm />
      <NavLg />
      <FilterContainer>
        <Filter />
      </FilterContainer>
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
              <h1>Find it. Explore it. Own it.</h1>
              <p>Seamlessly search for your dream real estate property</p>
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
              <h1>Find Your Dream Home</h1>
              <p>Explore our home listings and make informed decisions</p>
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
              <h1>Become The Latest Landlord</h1>
              <p>
                The best investment to make on earth is EARTH - Louis Glickman
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
              alt='Fouth slide'
            />
          </div>
          <Caption>
            <Carousel.Caption>
              <h1>Find Your Perfect Rental</h1>
              <p>
                Explore the perfect rental properties in your state and city
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
const FilterContainer = styled.div`
  width: 70%;
  position: absolute;
  z-index: 150;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export default Slider;
