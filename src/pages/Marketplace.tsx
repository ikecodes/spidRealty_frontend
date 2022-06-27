/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import PropertyRenderer from "../components/PropertyRenderer";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";

const Marketplace = () => {
  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize  m-0 p-0 mb-5 text-center'>
          all active listings
        </h1>
        <div className='position-relative'>
          <FilterContainer className='mb-3 shadow'>
            <Filter />
          </FilterContainer>
          <PropertyRenderer />
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
export default Marketplace;
