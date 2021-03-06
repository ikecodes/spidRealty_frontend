import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Image from "../shared/Image";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import moment from "moment";

interface IProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  photo: string;
}
const ArticleCard: React.FC<IProps> = ({
  id,
  slug,
  title,
  description,
  date,
  photo,
}) => {
  return (
    <div className='col-lg-4 col-md-6 mb-5'>
      <CardContainer className='shadow'>
        <Image src={photo} h={15} unit='rem' alt='property' />
        <TextContainer>
          <h5 className='text-capitalize m-0 mt-1'>
            {title.substring(1, 50)}...
          </h5>
          <p className='m-0'>{description.substring(1, 50)}...</p>
          <div className='d-flex justify-content-between mt-2 mb-1'>
            <div className='p-0 d-flex justify-content-end align-items-center'>
              <BsFillCalendarDateFill size={15} />
              <span className='ms-1 mt-1'>
                {moment(date).format("MM Do YYYY")}
              </span>
            </div>
            <Link to={`/blog/${slug}?${id}`}>
              <Button title='read' inverse />
            </Link>
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
`;

const TextContainer = styled.div`
  padding: 0 0.5rem;
  color: ${colors.white};
  position: absolute;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.4);
  width: 100%;
  & p {
    font-size: 0.8rem;
  }
  & > div span {
    font-size: 0.8rem;
  }
`;
export default ArticleCard;
