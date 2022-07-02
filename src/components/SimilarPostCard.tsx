import moment from "moment";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  id: string;
  slug: string;
  photo: string;
  title: string;
  date: string;
}
const SimilarPostCard: React.FC<Props> = ({ id, slug, photo, title, date }) => {
  return (
    <div className='bg-light my-3'>
      <Container className='row py-2'>
        <div className='col-lg-5 '>
          <Image src={photo} alt='similar' />
        </div>
        <div className='col-lg-7 text-dark'>
          <Link
            to={`/blog/${slug}`}
            state={id}
            style={{ textDecoration: "none" }}
          >
            <h6 className='fw-bold mt-2 text-secondary'>{title}</h6>
          </Link>
          <div className='d-flex align-items-center'>
            <BsCalendarDate size={15} className='me-1' />
            <span className='mt-1'>{moment(date).format("MM do YYYY")}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  & span,
  h6 {
    font-size: 0.8rem;
  }
`;
const Image = styled.img`
  height: 5rem;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 576px) {
    width: 40%;
  }
`;
export default SimilarPostCard;
