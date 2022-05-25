/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarketFilter from "../components/MarketFilter";
import PropertyCard from "../components/PropertyCard";
import { PropertyState } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Loader from "../shared/Loader";
import { getAllProperty } from "../slices/propertySlice";

const Marketplace = () => {
  const dispatch = useDispatch();

  const { properties, loading } = useSelector(
    (state: PropertyState) => state.property
  );
  useEffect(() => {
    dispatch(getAllProperty());
  }, []);

  return (
    <Layout>
      <Section>
        <h1 className='text-capitalize  m-0 p-0 mb-5 text-center'>
          all active listings
        </h1>
        <div className='position-relative'>
          <MarketFilter />
          {loading && <Loader />}
          <div className='row'>
            {properties.map((property: any) => (
              <PropertyCard
                key={property._id}
                title={property.title}
                region={property.region}
                state={property.state}
                slug={property.slug}
                price={property.price}
                image={property.images[0].original}
              />
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Marketplace;
