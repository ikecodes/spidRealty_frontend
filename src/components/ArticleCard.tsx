import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import ArticleImage from '../assets/images/family.jpg';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const ArticleCard = () => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer className='shadow'>
        <Image src={ArticleImage} />
        <TextContainer>
          <h5 className='text-capitalize'>welcome to the new des</h5>
          <p className='p-0 m-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
            error ullam odio.
          </p>
          <div className='d-flex align-items-center justify-content-end'>
            <BsFillCalendarDateFill size={15} />
            <p className='p-0 m-0 ms-1'>22-12-2022</p>
          </div>
        </TextContainer>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  overflow: hidden;
  background-color: ${colors.grey};
  position: relative;
  height: 20rem;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  padding: 0.5rem;
  color: ${colors.white};
  position: absolute;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.4);
  width: 100%;
  & p {
    font-size: 0.8rem;
  }
`;
export default ArticleCard;
