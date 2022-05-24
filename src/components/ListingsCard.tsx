import React from "react";
import Image from "../shared/Image";
import Button from "../shared/Button";
import styled from "styled-components";
import moment from "moment";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
interface Props {
  title: string;
  region: string;
  state: string;
  price: any;
  image: any;
  createdAt: any;
  remove?: boolean;
}
const ListingsCard: React.FC<Props> = ({
  remove,
  title,
  state,
  region,
  price,
  image,
  createdAt,
}) => {
  return (
    <Container className='row bg-white py-2 mb-3 bordered'>
      <div className='col-lg-4'>
        <Image src={image} h={10} unit='rem' alt='listing' rounded />
      </div>
      <div className='col-lg-6 d-flex flex-column justify-content-start gap-1'>
        <h4 className='text-capitalize text-dark m-0'>{title}</h4>
        <span className='text-capitalize text-secondary d-block'>
          @{region}, {state}
        </span>
        <span className='text-capitalize text-secondary'>
          Listed on {moment(createdAt).format("MMM Do YYYY")}
        </span>
        <h6 className='mt-2'>{formatter.format(price)}</h6>
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
