import React from "react";
import ListingImg from "..//assets/images/chairman.jpg";
import Image from "../shared/Image";
import Button from "../shared/Button";
import styled from "styled-components";

interface Props {
  remove?: boolean;
}
const ListingsCard: React.FC<Props> = ({ remove }) => {
  return (
    <Container className='row bg-white py-2 mb-3 bordered'>
      <div className='col-lg-4'>
        <Image src={ListingImg} h={10} unit='rem' alt='listing' rounded />
      </div>
      <div className='col-lg-6 d-flex flex-column justify-content-start gap-1'>
        <h4 className='text-capitalize text-dark m-0'>banana house</h4>
        <span className='text-capitalize text-secondary d-block'>
          @ikeja, lagos
        </span>
        <span className='text-capitalize text-secondary'>
          Listed on 25th march, 2022
        </span>
        <h6 className='mt-2'>₦50,0000,000</h6>
      </div>
      <div className='col-lg-2'>
        {remove ? (
          <Button title='remove' primary />
        ) : (
          <Button title='view' primary />
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  & span {
    font-size: 0.8rem;
  }
`;
export default ListingsCard;
