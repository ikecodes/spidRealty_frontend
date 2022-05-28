/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import MarketFilter from "../components/MarketFilter";
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
          <MarketFilter />
          <PropertyRenderer />
        </div>
      </Section>
    </Layout>
  );
};

export default Marketplace;
