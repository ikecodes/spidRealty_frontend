import React, { useState } from "react";
import Image from "../shared/Image";
import Button from "../shared/Button";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import { currencyFormat } from "../utils/Helpers";
import DeleteModal from "../utils/DeleteModal";
import { PropertyState } from "../constants/interfaces";
import { useSelector } from "react-redux";
import Loader from "../shared/Loader";

interface Props {
  id: string;
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
  id,
  title,
  state,
  region,
  price,
  image,
  slug,
  createdAt,
}) => {
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [deleteid, setDeleteid] = useState<null | string>(null);
  const { loading } = useSelector((state: PropertyState) => state.property);

  return (
    <>
      {loading && <Loader />}
      <Container className='row bg-white py-2 mb-3 bordered'>
        <DeleteModal
          data={deleteid}
          type='property'
          show={deleteModalShow}
          onHide={() => setDeleteModalShow(false)}
        />
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
          <div className='d-flex gap-2 flex-column justify-content-between  h-100 '>
            <Link to={`/marketplace/${slug}`} state={id}>
              <Button title='view' primary />
            </Link>
            <button
              disabled={loading}
              className='badge bg-danger'
              onClick={() => {
                setDeleteModalShow(true);
                setDeleteid(id);
              }}
            >
              remove
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
  & span {
    font-size: 0.8rem;
  }
`;
export default ListingsCard;
