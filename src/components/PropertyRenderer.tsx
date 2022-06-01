import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PropertyState } from "../constants/interfaces";
import Loader from "../shared/Loader";
import PropertyCard from "./PropertyCard";

const PropertyRenderer = () => {
  // const [page, setPage] = useState(1);
  // const [pageCount, setPageCount] = useState(10);
  const { properties, loading } = useSelector(
    (state: PropertyState) => state.property
  );

  const handlePageClick = (data: { selected: number }) => {
    console.log(data.selected);
  };

  // useEffect(() => {
  //   if (pagination) {
  //     setPageCount(pagination.pageCount);
  //   }
  // }, [pagination]);
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
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >>'
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel='<< previous'
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
`;
export default PropertyRenderer;
