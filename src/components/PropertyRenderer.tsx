import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PropertyState } from "../constants/interfaces";
import Loader from "../shared/Loader";
import PropertyCard from "./PropertyCard";

const PropertyRenderer = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { properties, pagination, loading } = useSelector(
    (state: PropertyState) => state.property
  );

  const handlePrevious = () => {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };

  const handleNext = () => {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  };

  useEffect(() => {
    if (pagination) {
      setPageCount(pagination.pageCount);
    }
  }, [pagination]);
  return (
    <Container>
      {loading && <Loader />}
      <div className='row'>
        {properties &&
          properties.map((property: any) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              region={property.region}
              state={property.state}
              slug={property.slug}
              price={property.price}
              image={property.images[0].original}
            />
          ))}
      </div>
      <footer>
        Page: {page}
        <br />
        Page count: {pageCount}
        <br />
        <button disabled={page === 1} onClick={handlePrevious}>
          Previous
        </button>
        <button disabled={page === pageCount} onClick={handleNext}>
          Next
        </button>
        <select
          value={page}
          onChange={(e: any) => {
            setPage(e.target.value);
          }}
        >
          {Array(pageCount)
            .fill(null)
            .map((_, index) => {
              return <option key={index}>{index + 1}</option>;
            })}
        </select>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;
export default PropertyRenderer;
