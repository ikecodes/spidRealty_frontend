/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import RentalFilter from "../components/RentalFilter";
import RentalPropertyRenderer from "../components/RentalPropertyRenderer";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import { getAllRentalProperty } from "../slices/propertySlice";

const RentalMarketplace = () => {
  const dispatch = useDispatch();
  const stateSlug = "";
  const regionSlug = "";
  const categorySlug = "";
  const page = 1;
  const limit = 10;
  useEffect(() => {
    dispatch(
      getAllRentalProperty({ stateSlug, regionSlug, categorySlug, page, limit })
    );
  }, []);
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize  m-0 p-0 mb-5 text-center'>
          all Rental Listings
        </h1>
        <div className='position-relative'>
          <FilterContainer className='mb-3 shadow'>
            <RentalFilter />
          </FilterContainer>
          <RentalPropertyRenderer />
        </div>
      </Section>
    </Layout>
  );
};

const FilterContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  text-align: center;
  width: 100%;
`;
export default RentalMarketplace;
