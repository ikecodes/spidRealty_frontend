/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingsCard from "../../components/ListingsCard";
import { PropertyState } from "../../constants/interfaces";
import { getAllPropertyByUser } from "../../slices/propertySlice";
import AgentLayout from "./AgentLayout";

const AgentListings = () => {
  const dispatch = useDispatch();

  const { userProperties } = useSelector(
    (state: PropertyState) => state.property
  );
  useEffect(() => {
    dispatch(getAllPropertyByUser());
  }, []);
  return (
    <AgentLayout>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          {userProperties.length > 0 ? (
            userProperties.map((property: any) => (
              <ListingsCard
                key={property._id}
                title={property.title}
                region={property.region}
                state={property.state}
                createdAt={property.createdAt}
                price={property.price}
                image={property.images[0].original}
              />
            ))
          ) : (
            <h4>You have not listed any property</h4>
          )}
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentListings;
