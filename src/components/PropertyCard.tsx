import React from "react";
import colors from "../constants/colors";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import Button from "../shared/Button";
import Image from "../shared/Image";
import { Link } from "react-router-dom";

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
  slug: string;
}
const PropertyCard: React.FC<Props> = ({
  title,
  state,
  region,
  price,
  image,
  slug,
}) => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer className='shadow'>
        <Card className='bg-transparent border-0'>
          <Image src={image} h={10} unit='rem' alt='property' />
          <Card.Body>
            <Card.Title className='text-capitalize fs-6 m-0 p-0'>
              {title}
            </Card.Title>
            <Price className='my-2'>{formatter.format(price)}</Price>
            <Location className='p-0 text-secondary d-flex justify-content-end align-items-center'>
              <MdLocationPin size={15} />
              <span className='text-capitalize'>
                {region}, {state}
              </span>
            </Location>
            <div className='text-center mt-3'>
              <Link to={`/marketplace/${slug}`}>
                <Button title='view' loading={false} primary />
              </Link>
            </div>
          </Card.Body>
        </Card>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  overflow: hidden;
  background-color: ${colors.grey};
`;

const Price = styled.h6`
  padding: 0;
  margin: 0;
  color: ${colors.tertiary};
`;
const Location = styled.h5`
  & span {
    font-size: 0.8rem;
  }
`;
export default PropertyCard;
