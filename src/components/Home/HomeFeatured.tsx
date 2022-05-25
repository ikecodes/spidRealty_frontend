import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../constants/colors";
import { PropertyState } from "../../constants/interfaces";
import Section from "../../layouts/Section";
import Loader from "../../shared/Loader";
import { getAllProperty } from "../../slices/propertySlice";
import PropertyCard from "../PropertyCard";

const HomeFeatured = () => {
  const dispatch = useDispatch();

  const { properties, loading } = useSelector(
    (state: PropertyState) => state.property
  );

  useEffect(() => {
    dispatch(getAllProperty());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Section>
      <div className='container'>
        <h1 className='text-capitalize  my-5'>featured properties</h1>
        {loading && <Loader />}
        <div className='row'>
          {properties.map((property: any) => (
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
        <div className='text-center my-3'>
          <Link to='/marketplace'>
            <Button>explore all</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

const Button = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  background: ${colors.white};
  border-radius: 5rem;

  transform-origin: bottom;
  transition: all 0.3s linear;

  &:hover {
    color: ${colors.tertiary};
    border: 1px solid ${colors.tertiary};
  }
`;

export default HomeFeatured;
