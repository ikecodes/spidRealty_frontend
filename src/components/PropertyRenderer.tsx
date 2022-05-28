import React from "react";
import { useSelector } from "react-redux";
import { PropertyState } from "../constants/interfaces";
import Loader from "../shared/Loader";
import PropertyCard from "./PropertyCard";

const PropertyRenderer = () => {
  const { properties, loading } = useSelector(
    (state: PropertyState) => state.property
  );
  return (
    <div>
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
    </div>
  );
};

export default PropertyRenderer;
