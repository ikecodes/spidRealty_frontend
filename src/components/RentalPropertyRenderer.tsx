import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ParamState, PropertyState } from "../constants/interfaces";
import Loader from "../shared/Loader";
import { getAllRentalProperty } from "../slices/propertySlice";
import PropertyCard from "./PropertyCard";

const PropertyRenderer = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const { properties, loading } = useSelector(
    (state: PropertyState) => state.property
  );
  const { stateSlug, regionSlug, categorySlug, limit } = useSelector(
    (state: ParamState) => state.param
  );

  useEffect(() => {
    if (properties) {
      console.log("///////", properties?.pagination.pageCount);
      setPageCount(properties?.pagination.pageCount);
    }
  }, [properties]);
  const handlePageClick = (data: { selected: number }) => {
    const page = data.selected + 1;
    setPage(page);
    dispatch(
      getAllRentalProperty({ stateSlug, regionSlug, categorySlug, page, limit })
    );
  };
  return (
    <Container>
      {loading && <Loader />}
      <div className='row'>
        {properties?.data.length === 0 && (
          <h3 className='mt-3 text-center text-secondary'>
            No properties available
          </h3>
        )}
        {properties?.data &&
          properties?.data.map((property: any) => (
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
      {properties?.data.length > 0 && (
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >>'
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='<< previous'
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={`page-link ${
            page === pageCount ? "text-secondary" : ""
          }`}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;
export default PropertyRenderer;
