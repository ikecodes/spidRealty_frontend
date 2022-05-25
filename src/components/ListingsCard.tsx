import React from "react";
import Image from "../shared/Image";
import Button from "../shared/Button";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { currencyFormat } from "../utils/Helpers";

interface Props {
  title: string;
  region: string;
  state: string;
  price: any;
  image: any;
  slug: string;
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
  slug,
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
        <h6 className='mt-2'>{currencyFormat(price)}</h6>
      </div>
      <div className='col-lg-2'>
        {remove ? (
          <Button title='remove' primary />
        ) : (
          <Link to={`/marketplace/${slug}`}>
            <Button title='view' primary />
          </Link>
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
