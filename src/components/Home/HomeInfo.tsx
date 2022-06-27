import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import Button from "../../shared/Button";
import { Link } from "react-router-dom";

const HomeInfo = () => {
  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 mb-5 text-center'>
            <h4 className='text-capitalize'>Buy A Property</h4>
            {/* <FaMoneyBill size={80} className='my-3' /> */}
            <p className='my-3'>
              Whether you're looking to sell your home, land or commercial
              property, we can help you navigate a successful sale
            </p>
            <Link to='/marketplace'>
              <Button title='Search Property' primary rounded />
            </Link>
          </div>
          <div className='col-lg-4 mb-5 text-center'>
            <h4 className='text-capitalize'>Sell A Property </h4>
            {/* <MdSell size={80} className='my-3' /> */}
            <p className='my-3'>
              We’re creating a seamless online property rental experience - from
              short-let apartments to event centres, venues, workstations and
              lots more
            </p>
            <Link to='/advertise'>
              <Button title='List Property' primary rounded />
            </Link>
          </div>
          <div className='col-lg-4 mb-5 text-center'>
            <h4 className='text-capitalize'>Rent A Property</h4>
            {/* <MdHomeWork size={80} className='my-3' /> */}
            <p className='my-3'>
              With the right information and tools, we give our highly esteemed
              clients the freedom to help themselves on their own terms{" "}
            </p>
            <Link to='/advertise'>
              <Button title='Explore Rentals' primary rounded />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 0;
  color: ${colors.primary};
  background: ${colors.white};
`;
export default HomeInfo;
