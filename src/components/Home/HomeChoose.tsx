import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import { MdOutlineSecurity } from "react-icons/md";
import { BiBadgeCheck, BiSupport } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";

const HomeChoose = () => {
  return (
    <Container>
      <h1 className='text-capitalize my-5 align-items-center text-center'>
        why choose us?
      </h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 mb-3 text-center'>
            <BiBadgeCheck size={80} className='my-3' />
            <h6 className='text-capitalize'>Clients First</h6>
          </div>
          <div className='col-lg-3 mb-3 text-center'>
            <BiSupport size={80} className='my-3' />
            <h6 className='text-capitalize'>Agents Support </h6>
          </div>
          <div className='col-lg-3 mb-3 text-center'>
            <MdOutlineSecurity size={80} className='my-3' />
            <h6 className='text-capitalize'>Business Security</h6>
          </div>
          <div className='col-lg-3 mb-3 text-center'>
            <RiTeamFill size={80} className='my-3' />
            <h6 className='text-capitalize'>Dynamic Team</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  color: ${colors.primary};
  background: ${colors.bgGradient};
`;
export default HomeChoose;
